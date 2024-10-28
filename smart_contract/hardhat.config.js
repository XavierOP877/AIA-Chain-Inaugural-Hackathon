require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const { PRIVATE_KEY } = process.env;


module.exports = {
  solidity: '0.8.17',
  networks:{
    aia:{
        url:'https://aia-dataseed1-testnet.aiachain.org',
        accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        gasPrice: 15000000000000,
      }
  }
}