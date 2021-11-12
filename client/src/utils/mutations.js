import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const createUser = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      email
      bookCount
      savedBooks {
        authors
        bookId
        image
        link
        title
        description
      }
    }
    token
  }
}
`;

export const saveBook = gql`
  mutation saveBook($input: savedBook!) {
     saveBook (input: $input)
        {
            _id
            username
            email
            bookCount
            savedBooks {
                # _id
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
  }
`;

  export const removeBook = gql`
    mutation removeBook($bookId: ID!) {
      removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
          # _id
          bookId
          authors
          image
          link
          title
          description
        }
      }
    }
  `;