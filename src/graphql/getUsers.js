import { gql } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    users {
      fullName
      id
    }
  }
`;
export default GET_USERS;
