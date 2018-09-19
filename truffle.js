require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "orange apple banana ... ";

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/<token>")
      },
      network_id: 3
    }
  }
};
// module.exports = {
//   networks: {
//     development: {
//       host: '127.0.0.1',
//       port: 8545,
//       // network_id: '666'
//     }
//   }
// }
