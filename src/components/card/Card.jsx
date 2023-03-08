import React from 'react'
import { CardButton, CardContainer, CardHeader, CardImg } from './Card.style'
import defaultImg from "../../assets/book.jpg"
import { Navigate } from 'react-router-dom'

const Card = ({item}) => {
  const navigate = Navigate()
  console.log(item)
  return (
    <CardContainer>
      <CardHeader>{item.volumeInfo.title}</CardHeader>
      <CardImg scr={item.volumeInfo.imageLinks.smallThumbnail || defaultImg} />
      <CardButton onClick={()=>navigate(`/detail/${item.id}`,{state:item})}>View More</CardButton>
    </CardContainer>
  );
}

export default Card