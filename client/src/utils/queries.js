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

export const YELP_SEARCH = gql`
  query SearchForBreweries($location: String) {
    search(term: "brewery", location: $location, limit: 2) {
      total
      business {
        id
        name
        url
        location {
          address1
          city
          state
        }
        rating
        photos
      }
    }
  }
`;
