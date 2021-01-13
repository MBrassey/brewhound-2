const axios = require("axios");
const yelpGraph = "https://api.yelp.com/v3/graphql";
const token =
  "5TimWiaGJvKNH_-tdRA7t0s9U6HT5jOlLTUVob_E8JxEt6ZOJordjjf1-q8a_yad0PeZ2bORaGPdf9OZFlD_4IbxNzuSeIprzK7v3DwhpQrohanLpg7YhXA4AHD7X3Yx";

const term = "brewery";
const location = "goodyear";

let yelpGQL = axios.create({
  baseURL: yelpGraph,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
  method: "POST",
});

try {
  // Using the yelpGQL helper we defined earlier
  // pass in GraphQL object for search term and return business name
  yelpGQL({
    data: JSON.stringify({
      query: `{
      search(term: "${term}",
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
    console.dir(data.data.search.business);

    let businesses = data.data.search.business;

    // iterates through each and displays name
    businesses.forEach((b) => {
      console.log("Name: ", b.name);
    });
  });
} catch (err) {
  console.log(err);
}
