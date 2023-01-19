import styled, { css } from "styled-components";

export const UseContainerCSS = css`
  max-width: 90vw;
  margin: 0 auto;

  @media (min-width: 1440px) {
    max-width: 80vw;
  }

  @media (min-width: 1920px) {
    max-width: 70vw;
  }

  @media (min-width: 2560px) {
    max-width: 60vw;
  }
`;

export const UseContainerSection = styled.section`
  ${UseContainerCSS}
`;

export const UseContainerDiv = styled.div`
  ${UseContainerCSS}
`;
