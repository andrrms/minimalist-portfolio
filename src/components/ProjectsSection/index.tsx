import { FC } from "react";

import ProjectCard from "./ProjectCard";

import {
  Content,
  ProjectsList,
  ProjectsSectionContainer,
  Subtitle,
  Title,
} from "./styles";
import AnchorPoint from "../AnchorPoint";
import { projects } from "../../services/data";

const ProjectsSection: FC = () => {
  return (
    <ProjectsSectionContainer>
      <AnchorPoint id="projects" />
      <Content>
        <Title>Meus projetos</Title>
        <Subtitle>Veja alguns dos meus projetos abaixo</Subtitle>
        <ProjectsList>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ProjectsList>
      </Content>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
