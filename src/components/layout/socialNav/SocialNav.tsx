import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Container, List, ListItem } from './Styles';

export const SocialNav = () => {
  function handleClick(rede: string) {
    switch(rede) {
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/meyer-andre', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/dev-andrewm', '_blank');
        break;
      case 'WhatsApp':
        window.open('https://wa.me/5516992456206', '_blank');
        break;
      default:
        return;
    }
  }

  return (
    <Container>
      <List>
        <ListItem>
          <FaLinkedin size={40} onClick={() => handleClick('LinkedIn')}/>
        </ListItem>
        <ListItem>
          <FaGithub size={40} onClick={() => handleClick('GitHub')}/>
        </ListItem>
        <ListItem>
          <FaWhatsapp size={40} onClick={() => handleClick('WhatsApp')}/>
        </ListItem>
      </List>
    </Container>
  )
}

export default SocialNav;