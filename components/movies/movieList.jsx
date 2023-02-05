import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MovieCard from './movieCard';
import { Box, Container, Grid } from '@mui/material';

export default function MovieList() {
  const [movies, setMovies]=useState([]);
  
  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular?api_key=a26889dcacb17b48d944c42f9180bd52")
  //   .then((res)=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setMovies(data.results);
  //   })
  // }, [])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a26889dcacb17b48d944c42f9180bd52`)
    .then(res => {
      const movies = res.data;
      setMovies(movies.results);
    })
  }, [])



  return (
    <Container>
        {movies.length > 0 ?(
        <Grid container>
            {movies.map((movie)=>
              <Grid item xs={12} md={4} key={movie.id}>
                <MovieCard {...movie}/>
              </Grid>
              )}
        </Grid>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </Container>
  )
}
