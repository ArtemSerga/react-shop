import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
    credentials: "include"
  }),
  cache: new InMemoryCache()
});

export default client;
