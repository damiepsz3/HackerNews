import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { GC_AUTH_TOKEN } from './constants'
import { ApolloLink } from 'apollo-client-preset'

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cja70kbfz0vtn0125zvluiqu5' })

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(GC_AUTH_TOKEN)
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
