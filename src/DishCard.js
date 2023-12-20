import React from 'react'
import { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './DishCard.css'
import ShortDesc from './ShortDesc';
import DishRating from './DishRating'


const DishCard= () => {
  const [a,setBook]=useState("bookmark outline");

  return(
  <Card className='dishcard'>
    <Image src={process.env.PUBLIC_URL + '/lemoncake.webp'} />
    <Card.Content>
      <Card.Header>Lemon Cake</Card.Header>
      <Card.Meta>
        Dessert<span><button id="t" onClick={()=>{if(a==="bookmark") setBook("bookmark outline");else setBook("bookmark")}}><Icon name={a} size="big"/></button></span>
      </Card.Meta>
      <Card.Description>
        <ShortDesc/>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <DishRating/>
    </Card.Content>
  </Card>
)
  }

export default DishCard