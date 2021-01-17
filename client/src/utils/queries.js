import gql from "graphql-tag";

export const GET_USER = gql`
  {
    me {
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
