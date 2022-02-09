import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/fonts/Raleway/Raleway-Regular.ttf';
import './index.css';

// Apollo Cache Persist
import { persistCache } from 'apollo-cache-persist';

// Apollo Client
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Apollo Cache
import { typeDefs, resolvers } from './graphql/resolvers';
import INITIAL_DATA from './graphql/initial-data';

// ApolloClient Config
const httpLink = createHttpLink({ uri: 'http://localhost:4000/' });
const cache = new InMemoryCache();

// Persist Local Cache
const persistApolloClientCache = async () =>
  await persistCache({ cache, storage: window.localStorage });

persistApolloClientCache();

// Instantiate Apollo Client
const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

// Set Initial Values for In-Memory Cache
cache.writeData({
  data: INITIAL_DATA,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
