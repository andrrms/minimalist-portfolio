import { FC } from "react";
import { TbBrandWhatsapp } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import {
  TiArrowForwardOutline,
  TiMail,
  TiSocialLinkedin,
} from "react-icons/ti";
import { ThemeAnchorButton } from "../../ThemeButton";

import { CardIcon, Content, ContactCardContainer } from "./styles";
import { CardProps } from "./types";

const titles: Record<CardProps["variant"], string> = {
  whatsapp: "Whatsapp",
  email: "E-mail",
  linkedin: "LinkedIn",
};

const descriptions: Record<CardProps["variant"], string> = {
  whatsapp:
    "Estou disponível para trocar um papo, vamos conversar sobre criatividade?",
  email: "Se preferir, você pode entrar em contato por e-mail também!",
  linkedin:
    "Meu perfil no LinkedIn está disponível para contato! Vamos nos conectar?",
};

const actions: Record<CardProps["variant"], { text: string; url: string }> = {
  whatsapp: {
    text: "Entrar em contato",
    url: "https://api.whatsapp.com/send?phone=5567991301333&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portfolio!%20Podemos%20conversar%3F",
  },
  email: {
    text: "Enviar e-mail",
    url: "mailto:pro.andresilveira@gmail.com",
  },
  linkedin: {
    text: "Conectar",
    url: "https://www.linkedin.com/in/andrrms/",
  },
};

const ContactCard: FC<CardProps> = ({ variant }) => {
  return (
    <ContactCardContainer>
      <CardIcon variant={variant}>
        {variant === "whatsapp" && <TbBrandWhatsapp size={40} />}
        {variant === "email" && <MdOutlineEmail size={40} />}
        {variant === "linkedin" && <FaLinkedinIn size={40} />}
      </CardIcon>
      <Content>
        <h3>{titles[variant]}</h3>
        <p>{descriptions[variant]}</p>
        <ThemeAnchorButton
          small
          transparent
          href={actions[variant].url}
          target="_blank"
          aria-label={actions[variant].text}
        >
          <TiArrowForwardOutline size={20} /> {actions[variant].text}
        </ThemeAnchorButton>
      </Content>
    </ContactCardContainer>
  );
};

export default ContactCard;
