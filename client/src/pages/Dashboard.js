// import { CardColumns, Card, Button } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
// import { removeBreweryId } from "../utils/localStorage";
// import { REMOVE_BREWERY } from "../utils/mutations";
import { GET_USER } from "../utils/queries";
import FadeIn from "react-fade-in";
// import Auth from "../utils/auth";
import React from "react";

const Dashboard = () => {
  const { loading, data } = useQuery(GET_USER);
  const userData = data?.me || {};
  console.log("test:" + userData.username);

  // const [removeBrew, { error }] = useMutation(REMOVE_BREWERY);
  // const handleDeleteBrew = async (brewId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     await removeBrew({
  //       variables: { brewId },
  //     });

  //     if (error) {
  //       throw new Error("Something went wrong!");
  //     }

  //     removeBreweryId(brewId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <FadeIn>
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
                    <h1 className="BrewFont">
                      <span>{userData.username}'s</span> Saved Breweries:
                    </h1>
                    <h2>
                      {userData.savedBreweries.length
                        ? `Viewing ${userData.savedBreweries.length} saved ${
                            userData.savedBreweries.length === 1
                              ? "brewery"
                              : "breweries"
                          }:`
                        : "You have no saved breweries!"}
                    </h2>
                  </div>
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
