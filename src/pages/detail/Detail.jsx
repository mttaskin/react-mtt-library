import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Description, DetailContainer, DetailImg, DetailTitle, InfoPart } from "./Detail.style";
import defaultImg from "../../assets/book.jpg"

const Detail = () => {
  const {state} = useLocation();
  const {id} = useParams();
  console.log(id)
  console.log(state)
  return (
    <DetailContainer>
      <DetailTitle>
        {state.volumeInfo.title}
      </DetailTitle>
      <DetailImg>
        <img src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg} alt={state.volumeInfo.title} />
      </DetailImg>
      <Description>
        {state.volumeInfo.description}
      </Description>
      <InfoPart>
        
      </InfoPart>
    </DetailContainer>
  )
}

export default Detail