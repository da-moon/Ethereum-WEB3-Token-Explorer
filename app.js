import express from "express";
import Web3 from "web3";
import bodyParser from "body-parser";
const helmet = require('helmet')

const ethereum_gateway = require('./controller/ethereum_gateway.js');

const app = express();
const port = 3000 || process.env.PORT;
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('www'));
app.get('/start', (req, res) => {
  ethereum_gateway.connect()
});
app.get('/getTokenAddresses', (req, res) => {
  ethereum_gateway.getTokenAddresses(function (answer) {
    res.send(answer);
  })
});
app.post('/getTokenName', (req, res) => {
  let address = req.body.address;
  let web3 = ethereum_gateway.web3
  ethereum_gateway.getTokenName(address,function (answer) {
    res.send(answer);
  })
});
app.post('/getTokenSymbol', (req, res) => {
  let address = req.body.address;
  let web3 = ethereum_gateway.web3
  ethereum_gateway.getTokenSymbol(address,function (answer) {
    res.send(answer);
  })
});
app.post('/getTokenDecimals', (req, res) => {
  let address = req.body.address;
  let web3 = ethereum_gateway.web3
  ethereum_gateway.getTokenDecimals(address,function (answer) {
    res.send(answer);
  })
});
app.post('/getTokenTotalSupply', (req, res) => {
  let address = req.body.address;
  let web3 = ethereum_gateway.web3
  ethereum_gateway.getTokenTotalSupply(address,function (answer) {
    res.send(answer);
  })
});

app.listen(port, () => {
  ethereum_gateway.web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/62fd28876ebd453b9eeda1c407f8b67e"));
});
