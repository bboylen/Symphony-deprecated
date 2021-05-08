import React from 'react';
import './App.less';
import { SpotifyPlayer } from './app/SpotifyPlayer';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import config from './aws-exports';

const client = new ApolloClient({
  uri: config.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': config.aws_appsync_apiKey,
  },
});

function App() {
  return (
    <div className="App">
      <SpotifyPlayer></SpotifyPlayer>
    </div>
  );
}

const AppWithProvider: React.FC = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppWithProvider;
