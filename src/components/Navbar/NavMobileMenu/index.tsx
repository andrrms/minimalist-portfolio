import { FC } from "react";
import { FiGithub } from "react-icons/fi";
import { ThemeAnchorButton } from "../../ThemeButton";

import { AnchorsList, BottomActions, NavMobileMenuContainer } from "./styles";

const NavMobileMenu: FC = () => {
  return (
    <NavMobileMenuContainer>
      <p>Seções</p>
      <AnchorsList>
        <li>
          <ThemeAnchorButton href="#home" transparent aria-label="Início">
            Início
          </ThemeAnchorButton>
        </li>
        <li>
          <ThemeAnchorButton href="#projects" transparent aria-label="Projetos">
            Projetos
          </ThemeAnchorButton>
        </li>
        <li>
          <ThemeAnchorButton href="#contact" transparent aria-label="Contato">
            Contato
          </ThemeAnchorButton>
        </li>
      </AnchorsList>
      <div className="hr" />
      <BottomActions>
        <ThemeAnchorButton
          transparent
          small
          href="https://www.github.com/andrrms/minimalist-portfolio"
          target="_blank"
          aria-label="Repositório do projeto"
        >
          <FiGithub /> Repositório
        </ThemeAnchorButton>
      </BottomActions>
    </NavMobileMenuContainer>
  );
};

export default NavMobileMenu;
