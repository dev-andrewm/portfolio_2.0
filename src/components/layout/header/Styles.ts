import styled from 'styled-components';

export const Hd = styled.header`
  position: relative;
  background-color: black;
  display: flex;
  /* justify-content: center; */
  width: 100%;
  height: 80px;
  box-sizing: border-box;
`

export const Container = styled.div`

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 85%;
  
  h1 {
    font-family: "Ysabeau Office", sans-serif;
    margin-bottom: 0;
    font-size: clamp(1rem, 3vw + 0.6rem, 3rem);
    line-height: 1;
    font-weight: bold;
    color: rgb(237, 237, 238);
    cursor: pointer;
  }

  .devTitle {
    width: fit-content;
    display: inline-flex;
    padding-left: 7px;
    gap: 10px;
    border-left: 1px solid rgb(212, 175, 55);
    border-right: 1px solid rgb(212, 175, 55);

    span {
      color: rgb(237,237,238);
      text-transform: uppercase;
      font-family: Prompt, sans-serif;
      font-weight: 200;
      font-size: clamp(0.5rem, 1vw + 0.3rem, 1rem);
      line-height: 1;
      letter-spacing: 7px;
    }
  }
`

export const MobileButton = styled.button`
  background-color: black;
  border: none;
  cursor: pointer;

  #hamburguer {
      display: block;
      border-top: 2px solid white;
      width: 25px;

      &::after, &::before {
        background-color: white;
        content: '';
        display: block;
        width: 25px;
        height: 2px;
        margin-top: 7px;
        position: relative;
        transition: .3s;
      }
  }

  #hamburguer.active {
    border-top-color: transparent;

    &::after {
      top: -7px;
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
  }
`
