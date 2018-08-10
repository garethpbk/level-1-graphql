import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const defaultState = {
  isEditMode: false,
};

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage,
}).then(() => {
  const client = new ApolloClient({
    cache,
    uri: 'https://api-uswest.graphcms.com/v1/cjk962bvc16tf01d2rl12ial4/master',
    clientState: {
      defaults: defaultState,
      resolvers: {},
    },
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  );
  registerServiceWorker();
});
