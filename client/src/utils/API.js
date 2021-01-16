const axios = require("axios");
const yelpGraph = "https://api.yelp.com/v3/graphql";
require("dotenv").config({ path: __dirname + "/../../.env" });
const token = process.env.REACT_APP_TOKEN;
const path = require("path");

// let yelpGQL = axios.create({
//   baseURL: yelpGraph,
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-type": "application/json",
//   },
//   method: "POST",
// });

export const yelpSearch = async (city, state) => {
  console.log(path.resolve(__dirname + "../"));
  try {
    // Using the yelpGQL helper we defined earlier
    // pass in GraphQL object for search term and return business name
    const response = await axios({
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

    // console.log(response.data.data.search);
    return response.data.data.search;
  } catch (err) {
    console.log(err);
  }
};

// yelpSearch("glendale", "arizona");
