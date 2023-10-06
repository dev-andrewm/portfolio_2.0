import styled from "styled-components";

/* TODO: Consertar bug de quando o site abre no celular, o navbar aparece fazendo animação de slideUp */


export const Nav = styled.nav<{ navIsVisible : boolean }>`
  background-color: rgb(56,56,56);
  z-index: 1000;

  width: 100%;
  height: calc(100vh - 70px);

  position: absolute;
  top: 100%;
  left: 0;

  &.slideDown {
    animation: slideDown 1s forwards;
  }

  &.slideUp {
    animation: slideUp 1s forwards;  
  }

  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
    }
    to{
      max-height: calc(100vh - 70px);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      max-height: calc(100vh - 70px);
      opacity: 1;
    }
    to {
      max-height: 0;
      opacity: 0;
    }
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  padding: 0 15px;
  margin: 0;
  
  display: flex;
  flex-direction: column;

  li {
    border-bottom: 1px solid rgb(237,237,238, .5);
    padding: 0.7rem 0;

    &:hover {
      transition: .5s;
      color: rgb(212,175,55);
    }
  }

  li a {
    text-decoration: none;
    color: white;
  }
`