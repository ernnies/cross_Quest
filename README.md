This repository queries The Graph using a GraphQL client, you can follow these steps. I will outline the process of setting it up to use Apollo Client to query The Graph. 

### Step 1: Set Up a New Node.js Project

1. **Initialize the project:**
   ```
   npm init -y
   ```

2. **Install required dependencies:**
   ```sh
   npm install @apollo/client graphql cross-fetch
   ```

### Step 2: Create the GraphQL Client
Create a file named `index.js` in the project root and set up the Apollo Client to query The Graph's subgraph.

```javascript
// server.js

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
```

### Step 3: Run the Script
You can now run your script using Node.js:

```sh
node server.js
```

The query in this repository fetches token data including ID, symbol, name, and decimals.


### Conclusion
This setup provides a simple Node.js application that queries a subgraph on The Graph using Apollo Client. You can extend this further to handle more complex queries and integrate it into a larger application as needed.