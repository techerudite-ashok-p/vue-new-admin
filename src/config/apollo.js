import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

console.log("BASE_GRAPHQL_API_URL", process.env.BASE_GRAPHQL_API_URL);
const httpLink = new HttpLink({
  uri: process.env.BASE_GRAPHQL_API_URL,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([authMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

provideApolloClient(apolloClient);

export default apolloClient;
