import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';

import './App.css';

const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=140037a1c29608b89ea9b95dd6047e78";
const API_URL_upcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=140037a1c29608b89ea9b95dd6047e78";
const API_URL_trending = "https://api.themoviedb.org/3/movie/now_playing?api_key=140037a1c29608b89ea9b95dd6047e78";
const API_URL_popular = "https://api.themoviedb.org/3/movie/popular?api_key=140037a1c29608b89ea9b95dd6047e78";
const API_URL_top_rated = "https://api.themoviedb.org/3/movie/top_rated?api_key=140037a1c29608b89ea9b95dd6047e78";


function App() {


  const [movies, setMovies] = useState([]);
  const [query, setQuery]=useState('');


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, [])


  const go_to_home=()=>{
    fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
  }


  const Trending=()=>{
    fetch(API_URL_trending)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
  }


  const popular=()=>{
    fetch(API_URL_popular)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      });
  }


  const top_rated=()=>{
    fetch(API_URL_top_rated)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      });
  }


  const upcoming=()=>{
    fetch(API_URL_upcoming)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      });
  }


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=140037a1c29608b89ea9b95dd6047e78&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }


  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>

    <header id="head">Moviescounter</header>


    <Navbar bg="black" expand="lg" variant='dark' className="nav">
      <Container fluid id="con">


        <span className='Btn'><Button onClick={go_to_home}>Home</Button></span>
        <span className='Btn'><Button onClick={Trending}>trending</Button></span>
        <span className='Btn'><Button onClick={upcoming}>Latest Release</Button></span>
        <span className='Btn'><Button onClick={popular}>popular</Button></span>
        <span className='Btn'><Button onClick={top_rated}>top-rated</Button></span>

          <span className='Btn' id="ser">
          <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>  
          </span>


      </Container>
    </Navbar>

    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((item)=>
          <MovieItem key={item.id} {...item}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
    
    </>
  );
}

export default App;
