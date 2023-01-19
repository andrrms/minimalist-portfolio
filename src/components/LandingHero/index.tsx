import { FC } from "react";
import { FiGithub } from "react-icons/fi";
import { DiHtml5, DiCss3Full } from "react-icons/di";
import { SiTypescript, SiReact, SiNodedotjs, SiExpress } from "react-icons/si";

import Sticker from "../../assets/memoji_sticker-min.png";
import StickerWEBP from "../../assets/memoji_sticker-min.webp";

import Background from "../../assets/headerbg-min.png";
import BackgroundWEBP from "../../assets/headerbg-min.webp";
import { ThemeAnchorButton } from "../ThemeButton";

import {
  LandingHeroContainer,
  StickerContainer,
  Content,
  Title,
  TechList,
  LandingBackground,
} from "./styles";
import AnchorPoint from "../AnchorPoint";

const LandingHero: FC = () => {
  return (
    <LandingHeroContainer>
      <AnchorPoint id="home" />
      <LandingBackground>
        <div>
          <picture>
            <source srcSet={BackgroundWEBP} type="image/webp" />
            <source srcSet={Background} type="image/png" />
            <img
              src={Background}
              alt="Imagem de fundo mostrando vários projetos genéricos"
            />
          </picture>
        </div>
      </LandingBackground>
      <Content>
        <StickerContainer>
          <figure>
            <picture>
              <source srcSet={StickerWEBP} type="image/webp" />
              <source srcSet={Sticker} type="image/png" />
              <img
                loading="lazy"
                src={Sticker}
                alt="Memoji de André Silveira junto a um emoji sorridente"
              />
            </picture>
          </figure>
          <p>E aí, tudo bem? Meu nome é André Silveira!</p>
        </StickerContainer>
        <Title>
          Eu <span>amo criar</span> projetos e desenvolver <span>ideias</span>{" "}
          💡
        </Title>
        <p>
          Conheça aqui neste ambiente, criado especialmente para você, todos os
          meus projetos e tecnologias
        </p>
        <div className="rowButtons">
          <ThemeAnchorButton primary href="#projects">
            Ver projetos
          </ThemeAnchorButton>
          <ThemeAnchorButton
            round
            href="https://www.github.com/andrrms"
            target="_blank"
            title="Abrir perfil do GitHub"
            aria-label="GitHub"
          >
            <FiGithub aria-label="Ícone do github" />
          </ThemeAnchorButton>
        </div>
        <TechList aria-label="Tecnologias">
          <li title="HTML5" aria-label="HTML5">
            <DiHtml5 />
          </li>
          <li title="CSS3" aria-label="CSS3">
            <DiCss3Full />
          </li>
          <li title="TypeScript" aria-label="TypeScript">
            <SiTypescript />
          </li>
          <li title="React.js" aria-label="React">
            <SiReact />
          </li>
          <li title="Node.js" aria-label="Node">
            <SiNodedotjs />
          </li>
          <li title="Express.js" aria-label="Express">
            <SiExpress />
          </li>
        </TechList>
      </Content>
    </LandingHeroContainer>
  );
};

export default LandingHero;
