import React, { useState } from 'react'
import { Hd, Container, MobileButton } from './Styles'
import Navbar from '../navbar/Navbar'

// TODO: Corrigir bug de mesmo estando invisível a navbar tá na frente da social

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState<boolean>(false);

  function handleClick() {
    setNavIsVisible(!navIsVisible);
  }

  return (
    <Hd>
      <Container>
        <div>
          <h1>André Meyer</h1>
          <div className='devTitle'>
            <span>frontend dev</span>
          </div>
        </div>
        <MobileButton onClick={handleClick}>
          <span id="hamburguer" className={navIsVisible ? 'active':''}></span>
        </MobileButton>
        <Navbar navIsVisible={navIsVisible} setNavIsVisible={setNavIsVisible}/>
      </Container>
    </Hd>
  )
}

export default Header