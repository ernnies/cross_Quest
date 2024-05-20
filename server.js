const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');
const fetch = require('cross-fetch');

const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  fetch,
});

const TOKENS_QUERY = gql`
  query {
    tokens {
      id
      symbol
      name
      decimals
    }
  }
`;

const runQuery = async () => {
  try {
    const result = await client.query({
      query: TOKENS_QUERY,
    });
    console.log('Subgraph data:', result.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

runQuery();
