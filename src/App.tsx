import logo from "./logo.svg";
import "./App.css";

import {ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import config from "./aws-exports";

const query = gql`
  {
    hello
  }
`;

const client = new ApolloClient({
  uri: config.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
