const axios = require("axios");
const yelpGraph = "https://api.yelp.com/v3/graphql";
const path = require("path");

export const yelpSearch = async (city, state, token) => {
  try {
    // Using the yelpGQL helper we defined earlier
    // pass in GraphQL object for search term and return business name
    return axios({
      method: "post",
      url: yelpGraph,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: JSON.stringify({
        query: `{
        search(term: "brewery",
                location: "${(city, state)}",
                limit: 10) {
            business {
                name
            }
        }
    }`,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};

// yelpSearch("glendale", "arizona");

// const handleFormSubmit = async (event) => {
//   event.preventDefault();
//   const token = process.env.REACT_APP_TOKEN;

//   // makes sure forms are not empty
//   if (!searchInput) {
//     return false;
//   }

//   const yelpSearch = (city, state) => {
//     try {
//       // pass in GraphQL object for search term and return business name
//       const response = await axios({
//         method: "post",
//         url: yelpGraph,
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         data: JSON.stringify({
//           query: `{
//         search(term: "brewery",
//                 location: "${(city, state)}",
//                 limit: 10) {
//                   business {
//                     name
//                   }
//                 }
//           }`,
//         }),
//       });
//       console.log(response.data.data.search);
//       // return response.data.data.search;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };
