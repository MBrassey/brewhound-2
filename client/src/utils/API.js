const axios = require("axios");
const yelpGraph = "https://api.yelp.com/v3/graphql";
require("dotenv").config({ path: "../../.env" });
const token = process.env.TOKEN;

let yelpGQL = axios.create({
  baseURL: yelpGraph,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
  method: "POST",
});

export const yelpSearch = (location) => {
  try {
    // Using the yelpGQL helper we defined earlier
    // pass in GraphQL object for search term and return business name
    yelpGQL({
      data: JSON.stringify({
        query: `{
        search(term: "brewery",
                location: "${location}",
                limit: 10) {
            business {
                name
            }
        }
    }`,
      }),
    }).then(({ data }) => {
      // graphql packs up as data as does axios so data.data to access search info

      let businesses = data.data.search.business;

      // iterates through each and displays name
      businesses.forEach((b) => {
        console.log("Name: ", b.name);
      });
    });
  } catch (err) {
    console.log(err);
  }
};
