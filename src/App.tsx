import React from 'react';
import './App.less';
import { SpotifyPlayer } from './app/SpotifyPlayer';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import config from './aws-exports';
Amplify.configure(config);

const client = new ApolloClient({
  uri: config.aws_appsync_graphqlEndpoint,
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': config.aws_appsync_apiKey,
  },
});

// Auth.federatedSignIn({
//   provider: CognitoHostedUIIdentityProvider,
// });

function App() {
  return (
    <div className="App">
      <button onClick={() => Auth.federatedSignIn()}>Sign in</button>
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
