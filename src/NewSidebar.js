import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

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
      <header>BOOK OF BITES</header>
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='content' />
        Recipes
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='conversation' />
        Contact Us
      </Menu.Item>
    </Sidebar>
)

export default NewSidebar