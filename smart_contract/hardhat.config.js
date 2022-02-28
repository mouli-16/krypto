require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/AxbDgZv0shnwg5jbwBeB9W-7fxppcxOI',
      accounts:['0689179cc38366d8679da5856107cf935e07e2f68e98181441ce8fc1e8ff5c68']
    }
  }
};
