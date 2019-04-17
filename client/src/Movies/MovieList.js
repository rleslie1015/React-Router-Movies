import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} id={ movie.id } addToSavedList={this.props.addToSavedList} />
        ))}
      </div>
    );
  }
}
