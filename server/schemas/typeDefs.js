const { gql } = require("apollo-server-express");

// query users: [User] is just for development purposes, can remove later
// addUser and login mutations are passed to Auth instead of user so we can get token
// need to make it so only unique entries can be added

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBreweries: [Brewery]
    brewCount: Int
  }

  type Brewery {
    brewId: String
    name: String
    location: String
    rating: Float
    link: String
    photo: String
    lat: Float
    lng: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  input savedBrewery {
    brewId: String
    name: String
    location: String
    rating: Float
    link: String
    photo: String
    lat:  Float
    lng: Float
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBrewery(input: savedBrewery!): User
    removeBrewery(brewId: String!): User
  }
`;

module.exports = typeDefs;
