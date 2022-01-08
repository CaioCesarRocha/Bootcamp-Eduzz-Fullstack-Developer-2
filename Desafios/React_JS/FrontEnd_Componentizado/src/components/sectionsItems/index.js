import React from "react";
import * as S from "./styled";


const SectionItem = ({ name, moreInfoLink, imgLink, duration, iconAdd, iconRem, act, clicked}) => {
  return (
    <S.Wrapper>
        <S.WrapperImage src={imgLink} alt="Avatar of movie" />
        <S.WrapperContentInfos>
            <S.WrapperTitle href={moreInfoLink} target="_blank" rel="noreferrer">
                {name}
            </S.WrapperTitle>
            <S.WrapperDuration>Duration: {duration}</S.WrapperDuration>
            {act ?  <button onClick={clicked}> {iconAdd}</button>
                 :  <button onClick={clicked}> {iconRem}</button>
                 
            } 
        </S.WrapperContentInfos>    
    </S.Wrapper>
  );
};

export default SectionItem;