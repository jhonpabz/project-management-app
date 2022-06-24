import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import AddModalClient from "./components/AddModalClient";
import { Container } from "@mui/material";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Container>
          <AddModalClient />
          <Clients />
        </Container>
      </ApolloProvider>
    </>
  );
};

export default App;
