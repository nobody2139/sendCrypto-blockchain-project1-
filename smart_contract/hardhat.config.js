require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['ed5586170f29784aa0560c98e4cb95b2d630cab218252f960f0ca06599e8e4d2'],
    },
  },
};
// https://dashboard.alchemy.com/apps/xptxgox1lz1v8ffh
// https://eth-goerli.g.alchemy.com/v2/TiGDVlS3tC1QXJoP2z2EH7P0E4IVQVFd
// ed5586170f29784aa0560c98e4cb95b2d630cab218252f960f0ca06599e8e4d2
// Transactions address:  0x446Cf7E9Cc6F1C69a20670592cb38F4D6A01522c

// npx hardhat run .\scripts\deploy.js --network ropsten
// to deploy it to test network