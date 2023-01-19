import styled from "styled-components";
import { UseContainerDiv } from "../../styles/common.styles";

export const NavbarContainer = styled.nav`
  z-index: 5000;
  padding: 15px;
  height: 80px;
  max-height: 80px;
  flex: 1;

  background-color: var(--color-kinda-black);
  color: var(--color-white-fixed);
  border-bottom: 2px solid var(--color-gray-4);

  position: relative;

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    left: 0;
  }
`;

export const NavbarWrapper = styled(UseContainerDiv)`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .signatureButton {
    background-color: transparent;
    padding: 0;
    border: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    list-style: none;

    a {
      text-decoration: none;
      color: var(--color-white-fixed);
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1.5rem;

      transition: 0.2s ease color;

      &:hover {
        color: var(--color-gray-2);
      }
    }
  }
`;
