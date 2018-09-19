const contract = require('truffle-contract');
const Web3 = require('web3');
const erc20ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];

module.exports = {
  connect: function() {
    this.token_addresses = ["0x44ea710145f059aa12e1ed8181819d63852a7d0f","0x862ce9b3ffdb868a2b833d8e808d10c62f772b90"]
  },
  getTokenAddresses: function(callback) {
    this.token_addresses = ["0x44ea710145f059aa12e1ed8181819d63852a7d0f","0x862ce9b3ffdb868a2b833d8e808d10c62f772b90"]
    // callback(this.token_addresses);
    return(this.token_addresses)
  },
  getTokenName: function(address, callback) {
    let web3 = this.web3;
    let checksummed_address = web3.utils.toChecksumAddress(address);
    let token =new web3.eth.Contract(erc20ABI, checksummed_address);
    // console.log(token.methods.name().call)
    token.methods.name().call(function(err, result) {
      if(err != null){
        throw("Could not load token name")
      }else{
      callback(result)
      }
    });
  },
  getTokenSymbol:function(address, callback){
    let web3 = this.web3;
    let checksummed_address = web3.utils.toChecksumAddress(address);
    let token = new web3.eth.Contract(erc20ABI, checksummed_address);
    token.methods.symbol().call(function(err, result) {
      if(err != null){
         throw("Could not load Token symbol")
      }else{
      callback(result)
      }
    });
  },
  getTokenDecimals: function(address, callback) {
    let web3 = this.web3;
    let checksummed_address = web3.utils.toChecksumAddress(address);
    let token = new web3.eth.Contract(erc20ABI, checksummed_address);
    token.methods.decimals().call(function(err, result) {
      if(err != null){
         throw("Could not load decimals")
      }else{
      callback(result.toString())
      }
    });
  },
  getTokenTotalSupply: function(address, callback) {
    let web3 = this.web3;
    let checksummed_address = web3.utils.toChecksumAddress(address);
    let token = new web3.eth.Contract(erc20ABI, checksummed_address);
    token.methods.totalSupply().call(function(err, result) {
      if(err != null){
         throw("Could not load total supply")
      }else{
      callback(result)
      }
    });
  },
}
