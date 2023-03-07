import React from 'react'
import { Logo, Menu, MenuLink, Nav } from './Navbar.style'

const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Logo>
        MTT LİBRARY
      </Logo>
      <Menu>
        <MenuLink to="/">home</MenuLink>
      </Menu>
  </Nav>
  )
}

export default Navbar