import NuKenzieBG from "../assets/nukenzie-bg.png";
import KenzieHubBG from "../assets/kenziehub-bg.png";
import CalculadoraBG from "../assets/calculadora-bg.png";
import LetmepayBG from "../assets/letmepay-bg.png";

import { ProjectCardProps } from "../components/ProjectsSection/ProjectCard/types";

export const projects: ProjectCardProps[] = [
  {
    image: NuKenzieBG,
    title: "NuKenzie",
    description: "Uma aplicação para controle simples de gastos financeiros.",
    techs: ["React", "JavaScript", "Styled Components"],
    deployLink: "https://nu-kenzie-rho.vercel.app/",
  },
  {
    image: KenzieHubBG,
    title: "KenzieHub",
    description: "Uma rede social de tecnologias para devs.",
    techs: ["React", "JavaScript", "Styled Components", "API Rest"],
    deployLink: "https://s4-09-kenzie-hub.vercel.app/",
  },
  {
    image: CalculadoraBG,
    title: "Calculadora de Antecipações",
    description:
      "Uma calculadora simples que realiza o cálculo de antecipações baseadas em um critério específico.",
    techs: ["React", "TypeScript", "Styled Components", "API Rest"],
    deployLink: "https://calculadora-antecipacao-sandy.vercel.app/",
    repoLink: "https://github.com/andrrms/calculadora-antecipacao",
  },
  {
    image: LetmepayBG,
    title: "Let me pay",
    description: "Uma simulação de sistema financeiro feita em equipe.",
    techs: [
      "Full Stack",
      "Express",
      "React",
      "TypeScript",
      "Styled Components",
      "API Rest",
    ],
    deployLink: "https://calculadora-antecipacao-sandy.vercel.app/",
    repoLink: "https://github.com/M4-Capstone",
  },
];
