const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User } = require("../models");

// context is /server/utils/auth.js
// may need to populate breweries
// Query.users is only for development purposes, can remove on final
const resolvers = {
  Query: {
    // queries currently logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      return new AuthenticationError("Not logged in");
    },
    // queries all users, useful for testing and getting user IDs
    users: async () => {
      return User.find().select("-__v -password");
    },
  },

  Mutation: {
    // sets up a new user by creating a new one with Mongoose and passed in args
    // then creates a token with the signToken(user) function
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // needs an eamil and password passed in to attemp to login
    // searches for user by email
    // if user does not exist, return invalid credentials
    // if password does not match, return invalid credentials
    // signs token and returns token and user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid credentials. Please try again.");
      }

      const validPw = await user.isCorrectPassword(password);
      if (!validPw) {
        throw new AuthenticationError("Invalid credentials. Please try again.");
      }

      const token = signToken(user);
      return { token, user };
    },

    // checks if user is logged in
    // searches for user and adds brewery (args.input from input typeDef) to savedBreweries
    // throw auth error if not logged in
    saveBrewery: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBreweries: args.input } },
          { new: true }
        );

        return user;
      }

      throw new AuthenticationError(
        "You need to be logged in to perform this action."
      );
    },

    // checks if user is logged in
    // searches for user and pulls from savedBreweries where brewId matches arg.brewId
    // throws auth error if not logged in
    removeBrewery: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBreweries: { brewId: args.brewId } } },
          { new: true }
        );

        return user;
      }

      throw new AuthenticationError(
        "You need to be logged in to perform this action."
      );
    },
  },
};

module.exports = resolvers;
