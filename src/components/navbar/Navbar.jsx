import React, { useState } from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'
import { menuIcon } from "../../helper/iconData";


const Navbar = ({currentUser,setCurrentUser}) => {
  const [showMenu, setShowMenu] = useState(false);

const logout = () => {
  setCurrentUser(false);
  sessionStorage.clear()
}

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>
        MTT LİBRARY
      </Logo>
      <HamburgerIcon onClick={()=>setShowMenu(!showMenu)}>
        {menuIcon}
        </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">home</MenuLink>
        <MenuLink to="/about">about</MenuLink>
        {/* <MenuLink to="/register">register</MenuLink>
        <MenuLink to="/login">login</MenuLink>
        <MenuLink to="/logout">logout</MenuLink> */}
        {
          currentUser?(
            <MenuLink to="/login" onClick={logout}>logout</MenuLink>
          ):(
            <>
            <MenuLink to="/register">register</MenuLink>
        <MenuLink to="/login">login</MenuLink>
            </>
          )
        }
      </Menu>
  </Nav>
  );
};

export default Navbar;