import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import NewRecipeForm from './NewRecipeForm'
import Login from './login'

const NewSidebar = ({handleAddNote}) => (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Header style={{color:"white",margin:"10px",padding:"5px",border:"2px solid white",borderRadius:"14%"}}>BOOK OF BITES</Header>
      <Menu.Item as='a' href="#home">
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a' href="#newrecipe">
        <NewRecipeForm handleAddNote= {handleAddNote}/>
      </Menu.Item>
      <Menu.Item as='a' href="#contact">
        <Login/>
      </Menu.Item>
      <Menu.Item as='a' href="#recipes">
        <Icon name='content' />
        Recipes
      </Menu.Item>
      <Menu.Item as='a' href="#contact">
        <Icon name='conversation' />
        Contact Us
      </Menu.Item>
    </Sidebar>
)

export default NewSidebar