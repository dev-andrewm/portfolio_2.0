import styled from "styled-components";

export const PageFooter = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${({theme}) => theme.colors.gray};
`

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;

  p {
    color: ${({theme}) => theme.colors.primaryWhite};
  }
`