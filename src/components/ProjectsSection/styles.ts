import styled from "styled-components";
import { UseContainerDiv } from "../../styles/common.styles";

export const ProjectsSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 30px;

  background-color: var(--color-kinda-black);

  display: flex;
  flex-direction: column;
`;

export const Content = styled(UseContainerDiv)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 2rem;
`;

export const Subtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-gray-3);
`;

export const ProjectsList = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;

  list-style: none;
`;
