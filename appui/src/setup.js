import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let ratingABI=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movieList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"movieNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"movie","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"movie","type":"bytes32"}],"name":"voteForMovie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let ratingAddress='0xd8973c4c8d600aaae1b15b35704ed97c6383bc75';
web3.eth.defaultAccount = web3.eth.accounts[0]


//const ratingContract=new web3.eth.contract(ratingABI).at(ratingAddress);
const ratingContract = new web3.eth.Contract(ratingABI, ratingAddress);//.at(ratingAddress);
console.log(JSON.stringify(ratingContract.totalVotesFor('HHH')));
// var contractInstance = ratingContract.at(address);
export {ratingContract};