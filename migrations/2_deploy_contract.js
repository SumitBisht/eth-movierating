var Ratings = artifacts.require("./Rating.sol");

module.exports = function(deployer){
    const movies = ['Star Wars', 'Shrek', 'Inception'];
    deployer.deploy(Ratings, movies, {gas:6700000});
};
