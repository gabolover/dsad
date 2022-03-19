import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_RAVN_CHALLENGE_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

/* client
  .query({
    query: gql`
      query getUsers {
        users {
          fullName
          id
        }
      }
    `,
  })
  .then((res) => console.table(res));

console.log(client);
 */
