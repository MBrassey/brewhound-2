import { CardColumns, Card, Button} from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { removeBreweryId } from "../utils/localStorage";
import { REMOVE_BREWERY } from "../utils/mutations";
import { GET_USER } from "../utils/queries";
import FadeIn from "react-fade-in";
import Auth from "../utils/auth";
import React from "react";

const Dashboard = () => {
  const { loading, data } = useQuery(GET_USER);
  const userData = data?.me || [];
  const [removeBrew, { error }] = useMutation(REMOVE_BREWERY);
  const handleDeleteBrew = async (brewId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeBrew({
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
      <FadeIn>
        <section className="align-items-center fixed-bg">
          <div
            className="container-fluid"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-xl-20">
                    <h1 className="BrewFont color">
                      <span>{userData.username}'s</span> Saved Breweries:
                    </h1>
                    <h2 className="color2">
                      {userData.savedBreweries.length
                        ? `Viewing ${userData.savedBreweries.length} saved ${
                            userData.savedBreweries.length === 1
                              ? "brewery"
                              : "breweries"
                          }:`
                        : "You have no saved breweries!"}
                    </h2>
                  </div>
                  <CardColumns className="mt-4">
                    {userData.savedBreweries.map((brews) => {
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
                            <Card.Title className="BrewFont">
                              {brews.name}
                            </Card.Title>
                            <Card.Text>Rating: {brews.rating}</Card.Text>
                            <Card.Link href={brews.link} target="_blank">
                              {brews.name}'s Website
                            </Card.Link>
                            <Card.Text>Location: {brews.location}</Card.Text>
                            {Auth.loggedIn() && (
                              <Button
                                className="btn-block btn-danger"
                                onClick={() => handleDeleteBrew(brews.brewId)}
                              >
                                Delete this Brewery!
                              </Button>
                            )}
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </CardColumns>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default Dashboard;
