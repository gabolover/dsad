import { gql } from "@apollo/client";

const GET_POINTS = gql`
  query task {
    tasks(input: {}) {
      pointEstimate
    }
  }
`;
export default GET_POINTS;
