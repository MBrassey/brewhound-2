// IMPORT BLOCK START
const {
  loadSchema,
  UrlLoader,
  makeExecutableSchema,
  mergeSchemas,
} = require("graphql-tools");
const express = require("express");
const path = require("path");
const db = require("../config/connection");
const { typeDefs, resolvers } = require("./index");
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("../utils/auth");
// IMPORT BLOCK END

const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config({ path: __dirname + "/../.env" });
token = process.env.TOKEN;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVER BLOCK START
(async function startServer() {
  const schema1 = await loadSchema("https://api.yelp.com/v3/graphql", {
    loaders: [new UrlLoader()],
    headers: {
      Accept: "application/graphql",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  });

  let schema2 = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  const mergedSchema = mergeSchemas({
    schemas: [schema1, schema2],
  });

  const server = new ApolloServer({
    schema: mergedSchema,
    cors: false,
    context: authMiddleware,
  });

  // integrate apollo with express
  server.applyMiddleware({ app });

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  // fallback route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  // server listener
})();

// SERVER BLOCK END
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can test GQL
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});
