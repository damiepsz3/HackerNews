import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cja70kbfz0vtn0125zvluiqu5' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
  , document.getElementById('root'));
registerServiceWorker();
