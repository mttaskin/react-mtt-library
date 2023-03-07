import React, { useState } from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'
import { menuIcon } from "../../helper/iconData";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>
        MTT LİBRARY
      </Logo>
      <HamburgerIcon onClick={()=>setShowMenu(!showMenu)}>
        {menuIcon}
        </HamburgerIcon>
      <Menu showmenu={showMenu}>
        <MenuLink to="/">home</MenuLink>
        <MenuLink to="/about">about</MenuLink>
        <MenuLink to="/register">register</MenuLink>
        <MenuLink to="/login">login</MenuLink>
        <MenuLink to="/logout">logout</MenuLink>
      </Menu>
  </Nav>
  )
}

export default Navbar