import styled from "styled-components";

export const NavMobileMenuContainer = styled.nav`
  position: absolute;
  top: 90px;

  width: calc(100% - 30px);

  border-radius: 8px;
  padding: 10px;
  background-color: var(--color-kinda-black);
  border: 2px solid var(--color-gray-4);

  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    padding: 15px 15px 0;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-gray-3);
  }

  .hr {
    width: 100%;
    height: 1px;
    background-color: var(--color-gray-4);
  }
`;

export const AnchorsList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;

  a {
    width: 100%;
  }
`;

export const BottomActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
