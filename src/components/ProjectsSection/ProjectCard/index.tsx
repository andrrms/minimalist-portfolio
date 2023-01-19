import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

import {
  BackgroundContainer,
  Content,
  Description,
  ProjectCardContainer,
  TagsList,
  Title,
} from "./styles";
import { ProjectCardProps } from "./types";

import { ThemeAnchorButton } from "../../ThemeButton";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  description,
  techs,
  deployLink,
  repoLink,
}) => {
  return (
    <ProjectCardContainer>
      <BackgroundContainer>
        <LazyLoadImage
          src={image}
          effect="blur"
          alt="Imagem do projeto"
          loading="lazy"
        />
      </BackgroundContainer>
      <Content>
        <Title>{title}</Title>
        {techs.length && (
          <TagsList>
            {techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </TagsList>
        )}
        <Description>{description}</Description>
        {deployLink || repoLink ? (
          <aside>
            {deployLink ? (
              <ThemeAnchorButton
                small
                primary
                href={deployLink}
                target="_blank"
                aria-label="Ver projeto"
              >
                <AiOutlineEye /> Ver projeto
              </ThemeAnchorButton>
            ) : null}
            {repoLink ? (
              <ThemeAnchorButton
                small
                href={repoLink}
                target="_blank"
                aria-label="Ver repositório"
              >
                <BiGitRepoForked /> Ver repositório
              </ThemeAnchorButton>
            ) : null}
          </aside>
        ) : null}
      </Content>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
