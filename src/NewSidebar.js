import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { BrowserRouter,Link } from "react-router-dom";

const NewSidebar = () => (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item >
        <p style={{border:"2px solid white",borderRadius:"10px",padding:"5px"}}>BOOK OF BITES</p>
      </Menu.Item>
      
      <Menu.Item as='a'>
        <Link to="/"><Icon name='home' />
        Home</Link>
      </Menu.Item>
      <Menu.Item as='a'>
        <Link to="/recipes"><Icon name='content' />
        Recipes</Link>
      </Menu.Item>
      <Menu.Item as='a'>
        <Link to="/contact"><Icon name='conversation' />
        Contact Us</Link>
      </Menu.Item>
    </Sidebar>
)

export default NewSidebar