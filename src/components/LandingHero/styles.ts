import styled from "styled-components";
import {
  UseContainerCSS,
  UseContainerSection,
} from "../../styles/common.styles";

export const LandingHeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 80px);

  background-color: var(--color-gray-5);
  color: var(--color-white-fixed);
  border-bottom: 4px solid var(--color-primary);
  z-index: 1000;

  position: relative;
`;

export const LandingBackground = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  ${UseContainerCSS}

  div {
    overflow: hidden;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    user-select: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-top: 50px;

  figure {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-white-fixed);
  }
`;

export const Content = styled(UseContainerSection)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > p {
    font-size: 1.1rem;
    color: var(--color-gray-3);
    width: 90vw;

    @media (min-width: 1024px) {
      width: 20vw;
    }
  }

  .rowButtons {
    display: flex;
    gap: 14px;
    margin-top: 50px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 30px;
  font-size: 2rem;
  cursor: default;

  span {
    color: var(--color-primary);

    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0px;
      height: 4px;
      background-color: currentColor;

      transition: 0.2s ease width;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 40vw;
    font-size: 3rem;
  }
`;

export const TechList = styled.ul`
  margin-top: auto;
  margin-bottom: 30px;
  list-style: none;

  font-size: 4rem;
  color: rgba(255, 255, 255, 0.5);

  display: flex;
  gap: 10px;

  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;

  svg {
    width: fit-content;
    height: fit-content;
    max-width: 4rem;
    max-height: 4rem;

    transition: 0.2s ease;
    &:hover {
      color: var(--color-white-fixed);
    }
  }
`;
