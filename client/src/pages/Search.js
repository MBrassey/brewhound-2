import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
  Modal,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { saveBreweryIds, getSavedBreweryIds } from "../utils/localStorage";
import { SAVE_BREWERY } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { YELP_SEARCH } from "../utils/queries";
import Map from "../components/Map";

const Search = () => {
  // modal
  const [showModal, setShowModal] = useState(false);
  // holds coordinates for map rendering
  const [coords, setCoords] = useState({
    lat: "",
    lng: "",
  });
  // holds yelp GQL data
  const [searchedBreweries, setSearchedBreweries] = useState([]);
  // state for holding search input
  const [searchInput, setSearchInput] = useState({
    city: "",
    state: "",
  });
  // GQL fetch for yelp data
  const { loading, data } = useQuery(YELP_SEARCH, {
    variables: { location: searchInput.city + " " + searchInput.state },
  });

  // save breweries
  const [saveBrewery, { error }] = useMutation(SAVE_BREWERY);
  const [savedBreweryIds, setSavedBreweryIds] = useState(getSavedBreweryIds());
  useEffect(() => {
    return () => saveBreweryIds(savedBreweryIds);
  });

  console.log(coords);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (data) {
        const breweries = await data.search.business;

        const brewData = breweries.map((brewery) => ({
          brewId: brewery.id,
          name: brewery.name,
          location:
            brewery.location.address1 +
            " " +
            brewery.location.city +
            " " +
            brewery.location.state,
          lat: brewery.coordinates.latitude,
          lng: brewery.coordinates.longitude,
          rating: brewery.rating,
          link: brewery.url,
          photo: brewery.photos[0],
        }));

        setSearchedBreweries(brewData);
        setSearchInput({
          city: "",
          state: "",
        });
      } else if (loading) {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(event) {
    // form onChange handler since there are two form fields
    // assigns value to form field value
    // updates state with event.target.name (city or state) and maps to value
    const value = event.target.value;
    setSearchInput({
      ...searchInput,
      [event.target.name]: value,
    });
  }

  // create function to handle saving a breweries to our database
  const handleSaveBrewery = async (brewId) => {
    // find the brewery in `searchedBreweries` state by the matching id
    const brewToSave = searchedBreweries.find(
      (brews) => brews.brewId === brewId
    );

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveBrewery({
        variables: { input: brewToSave },
      });

      if (error) {
        throw new Error("Something went wrong!");
      }

      setSavedBreweryIds([...savedBreweryIds, brewToSave.brewId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="fixed-bg">
        <Container>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col></Col>
              <Col>
                <Form.Control
                  name="city"
                  type="text"
                  placeholder="City"
                  className="border-0 bg-light rounded rounded-pill"
                  value={searchInput.city}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  name="state"
                  as="select"
                  type="text"
                  className="border-0 bg-light rounded rounded-pill"
                  value={searchInput.state}
                  onChange={handleChange}
                >
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="District_of_Columbia">
                    District Of Columbia
                  </option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New_Hampshire">New Hampshire</option>
                  <option value="New_Jersey">New Jersey</option>
                  <option value="New_Mexico">New Mexico</option>
                  <option value="New_York">New York</option>
                  <option value="North_Carolina">North Carolina</option>
                  <option value="North_Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode_Island">Rhode Island</option>
                  <option value="South_Carolina">South Carolina</option>
                  <option value="South_Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West_virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </Form.Control>
              </Col>
              <Col>
                <div className="input-group-append">
                  <Button
                    id="button-addon1"
                    type="submit"
                    variant="outline-warning"
                  >
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>

          <CardColumns className="mt-4">
            {searchedBreweries.map((brews) => {
              return (
                <Card key={brews.brewId}>
                  {brews.photo ? (
                    <Card.Img
                      src={brews.photo}
                      alt={`${brews.name} Yelp cover`}
                      variant="top"
                    />
                  ) : null}

                  <Card.Body>
                    <Card.Title className="BrewFont">{brews.name}</Card.Title>
                    <Card.Text>Rating: {brews.rating}</Card.Text>
                    <Card.Link href={brews.link} target="_blank">
                      {brews.name}'s Website
                    </Card.Link>
                    <Card.Text>Location: {brews.location}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        variant="warning"
                        disabled={savedBreweryIds?.some(
                          (savedBreweryId) => savedBreweryId === brews.brewId
                        )}
                        className="btn-block btn-info"
                        onClick={() => handleSaveBrewery(brews.brewId)}
                      >
                        {savedBreweryIds?.some(
                          (savedBreweryId) => savedBreweryId === brews.brewId
                        )
                          ? "Saved!"
                          : "Save"}
                      </Button>
                    )}
                    <Button
                      variant="warning"
                      className="btn-block btn-info"
                      onClick={() => {
                        setShowModal(true);
                        setCoords({
                          lat: brews.lat,
                          lng: brews.lng,
                        });
                      }}
                    >
                      Map
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </section>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Map
          id="myMap"
          options={{
            Center: { lat: coords.lat, lng: coords.lng },
            zoom: 20,
          }}
        />
      </Modal>
    </>
  );
};

export default Search;
