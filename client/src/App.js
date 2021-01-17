import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/About-us";

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
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
