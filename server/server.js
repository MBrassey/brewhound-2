const express = require("express");
const path = require("path");
const db = require("./config/connection");

const { ApolloServer } = require("apollo-server-express");
// uncomment after created
// const { typeDefs, resolvers } = require("./schemas");
// const { authMiddleware } = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;

// Apollo init. Uncomment after typeDefs, resolvers, and context are created
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddlware,
// });

// integrate apollo with express, uncomment after apollo is setup
// server.applyMiddlware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// fallback route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// server listener
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can test GQL
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
