import { ApolloClient, InMemoryCache, gql, createHttpLink } from "@apollo/client";

const link = createHttpLink({
    uri: "http://localhost:8001/graphql"
});

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

export const QUERY_POSTS = gql`
  query {
    posts { id title content author }
  }
`;

export const QUERY_COMMENTS = gql`
  query Comments($postId: Int) {
    comments(postId: $postId) {
      id text author postId
    }
  }
`;
