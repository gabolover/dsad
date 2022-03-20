import { gql } from "@apollo/client";

const CREATE_TASK = gql`
  mutation ($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      tags
      status
      assignee {
        id
        fullName
        email
        type
        avatar
        createdAt
        updatedAt
      }
      creator {
        id
        fullName
        email
        type
        avatar
        createdAt
        updatedAt
      }
      position
      dueDate
      pointEstimate
      createdAt
    }
  }
`;
export default CREATE_TASK;
