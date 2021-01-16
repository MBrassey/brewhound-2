const express = require("express");
const path = require("path");
const db = require("./config/connection");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;

// Apollo init.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// integrate apollo with express
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
