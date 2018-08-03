import React, { Component } from 'react';
import './movieRatings.css'

export class ShowMovieRatings extends Component {
    handleChange=(movie)=>{
        let _movie=movie;
        this.props.vote(_movie)
    }
    render(){
        let movieList = this.props.movies.map((movie, i)=>
        <tr key={i}>
            <td onClick={this.handleChange.bind(this, movie.name)}>{movie.name}</td>
            <td>{movie.rating}</td>
        </tr>)
        return(
            <div>
                <h3>Movies</h3>
                <hr />
                <table>
                    <tbody>
                        <tr><th>Movie Name</th><th>Movie Rating</th></tr>
                        {movieList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowMovieRatings;
