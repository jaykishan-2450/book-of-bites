import React from 'react'
import { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './DishCard.css'
import ShortDesc from './ShortDesc';
import DishRating from './DishRating'
const DishCard= () => (
  <Card className='dishcard'>
    <Image src={process.env.PUBLIC_URL + '/lemoncake.webp'} />
    <Card.Content>
      <Card.Header>Lemon Cake</Card.Header>
      <Card.Meta>
        <span>Dessert <span id='bookmark'><Icon name="bookmark outline" size="big"/></span></span>
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

export default DishCard