import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding-inline: 0;
  margin-block: 1.5rem;
`

export const ListItem = styled.li`
  color: ${({theme}) => theme.colors.primaryWhite};
    cursor: pointer;

    &:hover {
      background-color: red;
      cursor: pointer;
    }
`