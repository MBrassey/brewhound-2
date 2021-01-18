import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
  Modal
} from "react-bootstrap";
import React, { useState } from "react";
// import { Auth } from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { YELP_SEARCH } from "../utils/queries";
import ReactDOM from "react-dom";
import Map from "../components/Map";
import GoogleMapReact from "google-map-react";
const googleMapsApiKey = "AIzaSyDau5v5tTs6axw_ZN0OZZzyntxGELn3kHY";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Search = () => {
  const [showModal, setShowModal] = useState(false);
  // holds yelp GQL data
  const [searchedBreweries, setSearchedBreweries] = useState([]);
  // state for holding search input
  const [searchInput, setSearchInput] = useState({
    city: "",
    state: "",
  });
  // GQL fetch for yelp data
  const { data } = useQuery(YELP_SEARCH, {
    variables: { location: searchInput.city + " " + searchInput.state },
  });

  // need to add logic to save brewery

  // need to add logic to save to local storage

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const breweries = await data.search.business;

      console.log(breweries);
      const brewData = breweries.map((brewery) => ({
        brewId: brewery.id,
        name: brewery.name,
        location:
          brewery.location.address1 +
          " " +
          brewery.location.city +
          " " +
          brewery.location.state,
        rating: brewery.rating,
        link: brewery.url,
        photo: brewery.photos[0],
      }));

      setSearchedBreweries(brewData);
      setSearchInput({
        city: "",
        state: "",
      });
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
                    <Button variant="warning">Save</Button>
                    <Button variant="warning" onClick={() => setShowModal(true)}>Map</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </section>
      <Modal
          style={{ height: '100vh', width: '100%' }}
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="login-signup-modal"
        >
         
         <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDau5v5tTs6axw_ZN0OZZzyntxGELn3kHY" }}
          defaultCenter={59.95,30.33}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>

          
        </Modal>
        
    </>
  );
};

export default Search;
