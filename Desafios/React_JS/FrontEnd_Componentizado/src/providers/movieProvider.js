import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const MovieContext = createContext({
  loading: false,
  movie: {},
  related: [],
  myList: {},
});


const MovieProvider = ({ children }) => {
    const [movieState, setMovieState] = useState({
        hasUser: false,
        loading: false,
        movie: {
          id: undefined,
          title: undefined,
          cast: undefined,
          year: undefined,
          duration: undefined,
          producer: undefined,
          genres: undefined,
          avatar: undefined,
          description: undefined,
        },
        related: [],
        myList: []
    });

    const getMovie = (movieName) => {
        setMovieState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
        
        api.get(`movies?title_like=${movieName}`)
        .then(( {data} ) => {
            setMovieState((prevState)=> ({
              ...prevState,
              hasUser: true,
              movie:{
                id: data[0].id,
                title: data[0].title,
                cast: data[0].cast,
                year: data[0].year,
                duration: data[0].duration,
                producer: data[0].producer,
                genres: data[0].genres,
                avatar: data[0].avatar,
                description: data[0].description,
              },
            }));
        })
        .finally(() => {
          setMovieState((prevState) => ({
            ...prevState,          
            loading: !prevState.loading,
          }));
        });
    }

    const addList = (props) => {
     setMovieState((prevState)=> ({
        ...prevState,
        myList: [...props.myList, props.movie]
      }));  
    }

    const removeList = (myList, idMovie) => {
      setMovieState((prevState) => ({
        ...prevState,
        myList: []
      }));

      let newList = [];

      myList.map((item) => {
        if(idMovie !== item.id){
          newList.push(item)            
          setMovieState((prevState) => ({
            ...prevState,
            myList: [...newList]
          }));
      }})
    }
     
    const getRelated = (movie) =>{
      let relateds = []
      api.get(`movies?genres_like=${movie.movie.genres[0]}`)
      .then(( {data} ) => {   
        data.map(item => {
          if(item.title !== movie.movie.title){ 
            relateds.push(item)
            setMovieState((prevState)=> ({
              ...prevState,
              related: [ ...relateds]
            })); 
          }
        })               
      })
    }


    const contextValue = {
        movieState,     
        getMovie: useCallback((movieName) => getMovie(movieName), []),
        addList: useCallback((movie) => addList(movie), []),
        removeList: useCallback((myList, idMovie) => removeList(myList, idMovie), []),
        getRelated: useCallback((movie) => getRelated(movie), []),
        //getUserRepos: useCallback((username) => getUserRepos(username), []),
        //getUserStarred: useCallback((username) => getUserStarred(username), []),
    };


    return (
        <MovieContext.Provider value={contextValue}>
          {children}
        </MovieContext.Provider>
    );
}


export default MovieProvider;