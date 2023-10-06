import React from 'react';
import { Link } from 'react-router-dom';
import { Main, Section, FrameDiv, Container } from './Styles';
import CVPT from './CvPT.pdf';
import CVEN from './CvEN.pdf';

import SocialNav from '../../layout/socialNav/SocialNav';

const Sobre = () => {
  return (
    <Main>
      <Container>
        <Section className='title'>
          <div>
            <h1>André Meyer</h1>
            <h3>Desenvolvedor Front-end</h3>
            <SocialNav />
          </div>
        </Section>
        <Section style={{position: 'relative'}} className='description'>
          <h1>👋Olá,</h1>
          <p>
            Sou um desenvolvedor Frontend italo-brasileiro de Ribeirão Preto, SP - Brasil. Meu background inclui um bacharelado em Ciência da Computação e um MBA em Mercado de Capitais. Autodidata, possuidor de uma grande capacidade analítica e facilidade em aprender, busco sempre aprender coisas novas e me manter atualizado sobre  as novas tecnologias.
          </p>
          <p>
            Como Desenvolvedor Web especializado em Frontend, minhas habilidades com HTML, CSS, JavaScript, React, TypeScript, Redux, Styled-Components são voltadas a criar aplicações web dinâmicas, acessíveis, responsivas e intuitivas.
          </p>
          <p>
            Fora do mundo da programação, divido meu tempo lendo sobre diversos tópicos, praticando musculação e passando tempo com amigos.
          </p>
          <p>
            Este site é um espaço onde compartilho meus projetos pessoais e desafios de aprendizado. Seja bem-vindo para explorar meu trabalho e me conhecer um pouco melhor!
          </p>
          <div>
            <Link to='/projetos'>Projetos</Link>
            <Link to={CVPT} target='_blank'>Currículo</Link>           
          </div>
          {/* <FrameDiv style={{rotate: '45 deg', top: '-13rem'}}></FrameDiv>
          <FrameDiv style={{rotate: '15 deg', top: '-12rem'}}></FrameDiv> */}
        </Section>
      </Container>
    </Main>
  )
}

export default Sobre