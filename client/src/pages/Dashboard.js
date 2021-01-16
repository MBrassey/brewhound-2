import React from "react";
import { Jumbotron, CardColumns, Card, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import { GET_USER } from "../utils/queries";
import { Container, Row, Col } from "react-bootstrap";
import { removeBreweryId } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { REMOVE_BREWERY } from "../utils/mutations";

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
                  <h1>{userData.username}'s Saved Breweries:</h1>
                  <h2>Total Saved: {userData.savedBreweries}</h2>
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
