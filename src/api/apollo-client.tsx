import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

  const httpLink = createHttpLink({
    uri,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN
          ? `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
          : "",
      },
    };
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  }) as any;
});
