pragma solidity ^0.4.23;

contract Rating {
    
    mapping(bytes32=>uint8) public ratingsReceived;
    
    bytes32[] public movieList;

    /*
        The constructor function for entering the ratings
    */
    constructor (bytes32[] movieNames) public {
        movieList = movieNames;
    }

    // Returns the total vote obtained for the movie
    function totalVotesFor(bytes32 movie) view public returns (uint8){
        return ratingsReceived[movie];
    }
    // Increments the vote count for the specified movie
    function voteForMovie(bytes32 movie) public {
        ratingsReceived[movie] +=1;
    }

}