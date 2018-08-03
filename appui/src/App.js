import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from './setup';
import { ShowMovieRatings } from "./ShowMovieRatings";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movies: [{name:'Top Gun', rating:0},{name:'PK', rating:0},{name:'Bahubali', rating:1}]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }
  
  handleVoting(movie){
    ratingContract.voteForMovie(movie)
    let votes = ratingContract.totalVotesFor(movie).toNumber()
    this.setState({movies:this.state.movies.map(
      (el)=>el.name===movie? Object.assign({}, el, {rating:votes}):el
    )});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ethereum based Movie Ratings</h1>
        </header>
        <p className="App-intro">
          Movie rating application built on Ethereum and React
        </p>
        <div className="movie-table">
          <ShowMovieRatings movies={this.state.movies} vote={this.handleVoting}/>
        </div>
      </div>
    );
  }
}

export default App;
