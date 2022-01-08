import React, { useEffect, useState } from "react";
import SectionItem from '../sectionsItems';
import useMovie from '../../hooks/movieHooks';
import { FiPlusCircle , FiXCircle} from 'react-icons/fi';
import * as S from "./styled";


const Sections = () => {
    const { movieState, removeList, addList, getRelated, } = useMovie();
    const [hasUserForSearchsection, setHasUserForSearchsection] = useState(true);

    useEffect(() =>{     
      getRelated(movieState)
      //console.log(movieState.myList)
    }, [movieState.hasUser]);

    const addMovie = (item, movieState) => {  
      let newMovieList = {myList: [...movieState.myList], movie: {...item}}
      alert(`Filme ${item.title} adicionado a lista.`)
      //console.log("enviando:", newMovieList)
      return addList(newMovieList)
    }

    const removeMovie = (movieState, id) => {    
      return removeList(movieState.myList, id);
    }
    

    return (
        <>
          {hasUserForSearchsection ? (
            <>         
            <S.WrapperTabs
              selectedTabClassName="is-selected"
              selectedTabPanelClassName="is-selected"
            >
              <S.WrapperTabList>
                <S.WrapperTab>Related movies</S.WrapperTab>
                <S.WrapperTab>My list</S.WrapperTab>
              </S.WrapperTabList>
              
              <S.WrapperTabPanel>
                <S.WrapperList>
                  {movieState.related.map(item => (         
                    <SectionItem
                      key={item.id}
                      name={item.title}
                      imgLink={item.avatar}
                      moreInfoLink={item.description}
                      duration={item.duration}
                      iconRem= {<FiPlusCircle/>}
                      act={false}
                      clicked={() => addMovie(item, movieState)}
                    />  
                  ))} 
                </S.WrapperList>             
              </S.WrapperTabPanel>

              <S.WrapperTabPanel>
                <S.WrapperList>                
                  {movieState.myList.map(item => (         
                    <SectionItem
                      key={item.id}
                      name={item.title}
                      imgLink={item.avatar}
                      moreInfoLink={item.description}
                      duration={item.duration}
                      iconRem= {<FiXCircle/>}
                      act={false}
                      clicked={() => removeMovie(movieState, item.id)}
                    />  
                  ))}
                </S.WrapperList>
              </S.WrapperTabPanel>
              
            </S.WrapperTabs>
            </>
          ) : (
            <><span>ninguem aqui</span></>
          )}
        </>
      );
}

export default Sections;