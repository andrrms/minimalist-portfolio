import { FC, useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Signature from "../Signature";
import ThemeButton from "../ThemeButton";
import NavMobileMenu from "./NavMobileMenu";

import { NavbarContainer, NavbarWrapper } from "./styles";

const Navbar: FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (isResizing) return;
      setIsResizing(true);
      setScreenWidth(window.innerWidth);
      setTimeout(() => setIsResizing(false), 100);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isResizing]);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <a
          title="Logotipo do site, ir para o topo"
          className="signatureButton"
          href="#home"
          aria-label="Ir para o topo"
        >
          <Signature duration={3} height={50} strokeWidth={6} />
        </a>
        {screenWidth > 1024 ? (
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        ) : (
          <ThemeButton
            transparent
            title="Abrir/Fechar menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir/Fechar menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </ThemeButton>
        )}
      </NavbarWrapper>
      {isMenuOpen && screenWidth <= 1024 && <NavMobileMenu />}
    </NavbarContainer>
  );
};

export default Navbar;
