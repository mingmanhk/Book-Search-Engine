const { Book, User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return user.find({});
    },
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return users.find(params);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    saveBook: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
    deleteBook: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
