import { gql } from "@apollo/client";

const GET_STATUS = gql`
  query getStatus {
    tasks(input: {}) {
      status
    }
  }
`;
export default GET_STATUS;
