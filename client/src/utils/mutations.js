import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        brewCount
        savedBreweries {
          brewId
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        brewCount
        savedBreweries {
          brewId
        }
      }
    }
  }
`;

export const SAVE_BREWERY = gql`
  mutation saveBrewery($input: savedBrewery!) {
    saveBrewery(input: $input) {
      _id
      username
      email
      brewCount
      savedBreweries {
        brewId
        name
        location
        rating
        link
        photo
      }
    }
  }
`;

export const REMOVE_BREWERY = gql`
  mutation removeBrew($brewId: String!) {
    removeBrewery(brewId: $brewId) {
      _id
      username
      email
      brewCount
      savedBreweries {
        brewId
        name
        location
        rating
        link
        photo
      }
    }
  }
`;
