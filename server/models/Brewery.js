const { Schema } = require("mongoose");

// Sub-schema. Not going to be used direclty but added to User
const brewSchema = new Schema({
  // gotten from Yelp GraphQL - > Business
  brewId: {
    id: ID,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  link: {
    type: String,
  },
  photo: {
    type: String,
  },
});

module.exports = brewSchema;
