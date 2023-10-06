import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: black;

  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 85%;
  margin: 1.5rem auto;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Section = styled.section`
  width: 100%;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &.title {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
    font-size: 2rem;
    margin: 0;
    color: ${({theme}) => theme.colors.primaryWhite};
    }

    h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 300;
      letter-spacing: 1px;
      text-align: center;
      padding-bottom: 1rem;

      color: ${({theme}) => theme.colors.primaryYellow};

      border-bottom: 1px solid ${({theme}) => theme.colors.primaryYellow};
    }
    
  }

  &.description {

    h1 {
      color: ${({theme}) => theme.colors.primaryWhite};
      margin-block: 1rem;
      font-size: 3.5rem;
    }

    p {
    color: ${({theme}) => theme.colors.primaryWhite};
    font-size: 1.15rem;
    font-family: ${({theme}) => theme.fonts.primaryParagraph};
    }

    div {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    a {
      flex-grow: 1;
      text-align: center;
      text-decoration: none;

      color: ${({theme}) => theme.colors.primaryYellow};
      background-color: ${({theme}) => theme.colors.black};

      border: 1px solid ${({theme}) => theme.colors.primaryYellow};

      border-radius: 100em;

      padding-block: .5rem;

      transition: all .2s ease-in-out 0s;

      text-transform: uppercase;

      box-shadow: rgb(97,97,97) 0px 5px 15px;

      &:hover {
        transform: scale(1.1);
        color: ${({theme}) => theme.colors.primaryWhite};
      }
    }
  }
`

export const FrameDiv = styled.div`
  position: absolute;
  left: -5rem;
  right: 0;
  width: 60px;
  height: 60px;
  border: 5px solid ${({theme}) => theme.colors.primaryYellow};
  box-shadow: ${({theme}) => theme.colors.primaryYellow} 0px 5px 15px;
  border-radius: 5px;
  z-index: -1px;
  opacity: 0.8px;
`