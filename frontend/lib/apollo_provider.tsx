"use client"

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (networkError) {
        console.log(`[Network error]: ${networkError}`)
      }

      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
    }),
    new HttpLink({
      uri: "https://api.studio.thegraph.com/query/44880/hifadhi/0.0.3",
    }),
  ]),
})

export function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}