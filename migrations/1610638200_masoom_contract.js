const MasoomContract = artifacts.require('../contracts/MasoomContract.sol')
module.exports = function(_deployer) {
  _deployer.deploy(MasoomContract)
};
