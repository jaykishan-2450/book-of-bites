import React from 'react'
import { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './DishCard.css'
import DishRating from './DishRating'
const DishCard= () => (
  <Card className='dishcard'>
    <Image src={process.env.PUBLIC_URL + '/images/lemoncake.webp'} />
    <Card.Content>
      <Card.Header>Lemon Cake</Card.Header>
      <Card.Meta>
        <span className='date'>Dessert</span>
      </Card.Meta>
      <Card.Description>
        <DishRating/>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      </a>
      <button><Icon name='thumbs up' className='like'/></button>
    </Card.Content>
  </Card>
)

export default DishCard