import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import TopArrow from "./components/Page-top";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApolloClient from "apollo-boost";
import AboutUs from "./pages/About-us";
import SignUp from "./pages/Signup";
import Search from "./pages/Search";
import NoBeer from "./pages/NoBeer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React from "react";

function App() {
  // declare new apollo client and pulls token from localstorage if available
  const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem("id_token");

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    },

    uri: "/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Dashboard} />
            <Route exact path="/about" component={AboutUs} />
            <Route component={NoBeer} />
          </Switch>
          <TopArrow></TopArrow>
          <Footer></Footer>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
