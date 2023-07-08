import React, {useEffect, useState} from "react";
import Movie from './components/Movie';



const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a008b1&query="

  

function App(){
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [clicked,setClicked] = useState(false);
  const [stars, setStars] =useState(1);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const onMouseOver = (rating) => {};
  const onMouseOut = (rating) => {};
  const onClick = (rating) => {};
  const resetForm = (e) => {};
  const submitReview = (e) => {};
  const deleteReview = (e, index) => {};
  
  useEffect(() => {
     getMovies(FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
     .then((res) => res.json())
      .then(data => {
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) =>{
     e.preventDefault();
   
     if(searchTerm){
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
           setMovies(data.results);
        });
      
       setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return(
  <>
      <header>
        <form onSubmit={handleOnSubmit}>
        <input 
        className="search"
         type="search" 
         placeholder="Search ..."
        value={searchTerm}
        onChange={handleOnChange}
        />
        </form>
      </header>

    <div className="movie-container">
      {movies.length > 0 && 
      movies.map((movie) => 
        <Movie key={movie.id} {...movie}/>)}
    </div>
    
  </>
  
  );
}
export default App;