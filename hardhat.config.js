require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Replace this with a URL generated after setting up and account
// with a node provider e.g. alchemy.io
const SEPOLIA_URL = process.env.SEPOLIA_URL

const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    SEPOLIA: {
      url: `${SEPOLIA_URL}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
