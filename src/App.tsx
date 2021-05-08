import logo from "./logo.svg";
import "./App.css";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import config from "./aws-exports";
console.log(config);
const query = gql`
  {
    listBlogs {
    nextToken
  }
  }
`;

const client = new ApolloClient({
  uri: config.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': config.aws_appsync_apiKey
  },
});

function App() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log("error: ", error);
    return <p>Error :(</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.hello}</h1>
      </header>
    </div>
  );
}

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppWithProvider;
