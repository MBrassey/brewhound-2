const secret = "ZtXI1btKYJxMXHM2Y3Nv";
const jwt = require("jsonwebtoken");
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // token can be sent through req.body, req.query, or req.headers

    let token = req.body.token || req.query.token || req.headers.authorization;

    //removes "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // if no token, return request
    if (!token) {
      return req;
    }

    try {
      // attaches user data to token
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },

  // gets uername, email, and _id then signs token with secret
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
