import React, { useState } from "react";
// import { useMutation } from "@apollo/react-hooks";
import SearchResults from "../components/SearchResults";
// import { SAVE_BREWERY } from "../utils/mutations";
import { yelpSearch } from "../utils/API";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  // hold state for yelp query
  //   const [searchedBreweries, setSearchedBreweries] = useState([]);
  // search input data fields
  const [searchInput, setSearchInput] = useState({
    city: "",
    state: "",
  });

  // mutation to save brewery
  //   const [saveBrewery] = useMutation(SAVE_BREWERY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // makes sure forms are not empty
    if (!searchInput) {
      return false;
    }

    try {
      // call to yelpGQL
      const response = await yelpSearch(searchInput.city, searchInput.state);
      console.log("Response: " + response);

      //   const { brewData } = await response.json();

      // do something with datas
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

  //   const handleSaveBrewery = async (brewId) => {
  //     return null;
  //   };

  return (
    <>
      <section id="hero">
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

          <SearchResults></SearchResults>
        </Container>
      </section>
    </>
  );
};

export default Search;
