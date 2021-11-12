const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    savedBooks: [Book]!
    bookCount: Int
  }

  type Book {
    _id: ID!
    authors: String!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    Users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }

  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }
`;

module.exports = typeDefs;
