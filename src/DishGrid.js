import React from 'react'
import {Grid} from 'semantic-ui-react'
import './DishGrid.css'
import DishCard from './DishCard';
const DishGrid = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <DishCard/>
      </Grid.Column>
      <Grid.Column>
      <DishCard/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <DishCard/>
      </Grid.Column>
      <Grid.Column>
      <DishCard/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default DishGrid