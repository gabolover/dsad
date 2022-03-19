import { gql } from "@apollo/client";

const GET_TASK_CARD = gql`
  query getTaskCard($status: Status!) {
    tasks(input: { status: $status }) {
      assignee {
        avatar
        fullName
      }
      tags
      dueDate
      pointEstimate
      createdAt
      status
      name
    }
  }
`;

export default GET_TASK_CARD;
