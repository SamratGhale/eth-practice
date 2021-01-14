const path = require('path')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
  networks: {
    development: {
      network_id: '*',
      host: 'localhost',
      port: 8545,
      gas: 6725,
      gasPrice: 2000000,
    },
    compilers: {
      solc: {
        version: '0.4.17',
        oprimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    develop: {
      port: 8545,
      version: '0.4.17',
    },
  },
}
