require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
//require("@nomiclabs/hardhat-ganache");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygon_mumbai: {
      url: 'STAGING_QUICKNODE_KEY',
      accounts: ['PRIVATE_KEY'],
    },
  },
};
