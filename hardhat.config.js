require('@nomiclabs/hardhat-waffle')
require('dotenv').config()


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "dnH-fo09NOGJYIz8HS30srFi5UuJ79VA";

const GOERLI_PRIVATE_KEY = "7679812482cf4665db27548631bb7ed541faeb1970421b4d383a9ecd36e82daf";



module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      // ℹ️ Added our new account to the Rinkeby settings
      accounts: [process.env.GOERLI_WALLET_PRIVATE_KEY],
    }
  
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },
}
