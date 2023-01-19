import styled from "styled-components";
import { UseContainerSection } from "../../styles/common.styles";

export const ContactSectionContainer = styled(UseContainerSection)`
  padding-block: 40px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 1024px) {
    padding-block: 100px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 1.2rem;
    color: var(--color-gray-3);
  }

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const Title = styled.h2`
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
    font-size: 2.4rem;
  }
`;
