import React  from 'react';
import {
  Jumbotron,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { GET_USER } from "../utils/queries";
import { Container, Row, Col } from 'react-bootstrap';
import { removeBreweryId } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { REMOVE_BREWERY } from "../utils/mutations";

const Dashboard = () => {
    const [removeBrewery, { error }] = useMutation(REMOVE_BREWERY);
  
    const { loading, data } = useQuery(GET_USER);
    const userData = data?.me || {};
  
    const handleDeletebrewery = async (brewId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        await removeBrewery({
          variables: { brewId },
        });
  
        if (error) {
          throw new Error("Something went wrong!");
        }
  
        removeBreweryId(brewId);
      } catch (err) {
        console.error(err);
      }
    };
  
    if (loading) {
      return <h2>LOADING...</h2>;
    }
  
    return (
      <>
        <Jumbotron fluid className="text-light bg-dark">
          <Container>
            <h1>Viewing saved breweries!</h1>
          </Container>
        </Jumbotron>
        <Container>
          <h2>
            {userData.Dashboard.length
              ? `Viewing ${userData.Dashboard.length} saved ${
                  userData.Dashboard.length === 1 ? "brewery" : "breweries"
                }:`
              : "You have no saved breweries!"}
          </h2>
          <CardColumns>
            {userData.Dashboard.map((brewery) => {
              return (
                <Card key={brewery.brewId} border="dark">
                  {brewery.photo ? (
                    <Card.Img
                      src={brewery.photo}
                      alt={`The photo for ${brewery.name}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{brewery.name}</Card.Title>
                    <p className="small">Rating: {brewery.rating}</p>
                    <Card.Text>{brewery.location}</Card.Text>
                    <Button
                      className="btn-block btn-danger"
                      onClick={() => handleDeletebrewery(brewery.brewId)}
                    >
                      Delete this brewery!
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </>
    );
  };

export default Dashboard;