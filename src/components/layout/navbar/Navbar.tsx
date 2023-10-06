import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, List } from './Styles';

interface NavbarProps {
  navIsVisible: boolean;
  setNavIsVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

const Navbar = (props: NavbarProps) => {
  
  function handleClick() {
    props.setNavIsVisible(!props.navIsVisible);
  }

  return (
    <Nav className={props.navIsVisible ? 'slideDown':'slideUp'} navIsVisible = {props.navIsVisible}>
      <List>
        <li><NavLink to='/aboutme' onClick={handleClick}>Sobre</NavLink></li>
        <li><NavLink to='/projects' onClick={handleClick}>Projetos</NavLink></li>
        <li><NavLink to='/skills' onClick={handleClick}>Habilidades</NavLink></li>
        <li><NavLink to='/contact' onClick={handleClick}>Contato</NavLink></li>
      </List>
    </Nav>
  )
}

export default Navbar
