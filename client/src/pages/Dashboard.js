import { Jumbotron, CardColumns, Card, Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { removeBreweryId } from "../utils/localStorage";
import { REMOVE_BREWERY } from "../utils/mutations";
import { GET_USER } from "../utils/queries";
import Auth from "../utils/auth";
import React from "react";

const Dashboard = () => {
  const { loading, data } = useQuery(GET_USER);
  const userData = data?.me || {};
  console.log("test:" + userData.username);
  return (
    <>
      <section id="hero" className="align-items-center">
        <div
          className="container-fluid"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-20">
                  <h1><span>{userData.username}'s</span> Saved Breweries:</h1>
                  <h2>
                    {userData.savedBreweries.length
                      ? `Viewing ${userData.savedBreweries.length} saved ${
                          userData.savedBreweries.length === 1 ? "brewery" : "breweries"
                        }:`
                      : "You have no saved breweries!"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
