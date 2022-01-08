import React from "react";
import { FiPlusCircle, FiDownload,FiPlayCircle } from 'react-icons/fi';
import useMovie from "../../hooks/movieHooks";
import * as S from "./styled";



const Description = () => {
    const { movieState, addList } = useMovie();

    const showDownload = (props) => {
      alert(`Fazendo download do filme ${props}...`)
    }

    const showTrailer = (props) => {
      alert(`Exibindo trailer do filme ${props}.`)
    }

    const add = (props) =>{ //adicionar o id na lista
      alert(`Filme ${props.movie.title} adicionado a lista.`)
      return addList(props)
    }
  
    return (
      <S.Wrapper>
        <S.WrapperImage src={movieState.movie.avatar} alt="Avatar of movie" />
        <S.WrapperInfoMovie>
          <div>
            <S.WrapperTitle>
              <a
                href={movieState.movie.description}
                target="_blank"
                rel="noreferrer"
              >
                <h1>{movieState.movie.title}</h1>
              </a>
            </S.WrapperTitle>
                    
            <S.WrapperMovieGeneric>
              <h3>Cast:</h3>
                <span>{movieState.movie.cast}</span> 
            </S.WrapperMovieGeneric>
            <S.WrapperMovieGeneric>
              <h3>Year Release:</h3>
              <span>{movieState.movie.year}</span>
            </S.WrapperMovieGeneric>
            <S.WrapperMovieGeneric>
              <h3>Duration:</h3>
              <span>{movieState.movie.duration}</span>
            </S.WrapperMovieGeneric>
            <S.WrapperMovieGeneric>
              <h3>Producer:</h3>
               <span>{movieState.movie.producer}</span>          
            </S.WrapperMovieGeneric> 
            <S.WrapperMovieGeneric>
              <h3>Genres:</h3>
                <span>{movieState.movie.genres[0]}, {movieState.movie.genres[1]} </span> 
            </S.WrapperMovieGeneric>   
          </div>         
        </S.WrapperInfoMovie>

        <S.WrapperContainerOptions>
          <S.WrapperOptions>          
            <S.WrapperButton onClick={() => showTrailer(movieState.movie.title)}> <FiPlayCircle/> </S.WrapperButton>
            <span>Trailer</span>
          </S.WrapperOptions>

          <S.WrapperOptions>          
            <S.WrapperButton onClick={() => showDownload(movieState.movie.title)}> <FiDownload/>  </S.WrapperButton>
            <span>Download</span>
          </S.WrapperOptions>

          <S.WrapperOptions>          
            <S.WrapperButton onClick={() => add(movieState)}> <FiPlusCircle/> </S.WrapperButton>
            <span>Add Lista</span>
          </S.WrapperOptions>
        </S.WrapperContainerOptions>
        
      </S.Wrapper>
    );
  };
  
  export default Description;
 