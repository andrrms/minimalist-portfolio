import styled from "styled-components";

export const ProjectCardContainer = styled.article`
  position: relative;

  width: 100%;
  height: 250px;

  border-radius: 8px;
  border: 2px solid var(--color-gray-4);
  overflow: hidden;

  transition: all 0.1s ease-in-out;

  &:hover {
    border-color: var(--color-primary);
  }
`;

export const BackgroundContainer = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;

    filter: brightness(0.3);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 10px;

  aside {
    margin-top: auto;
    display: flex;
    gap: 10px;

    a {
      flex: 1;
      justify-content: center;
    }
  }
`;

export const Title = styled.h4`
  font-size: 1.4rem;
`;

export const TagsList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;

  li {
    font-size: 0.9rem;
    font-weight: 600;

    border-radius: 4px;
    background-color: var(--color-primary-50);
    color: var(--color-white-fixed);

    padding: 4px 8px;
  }
`;

// Wrap on 3 lines
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
