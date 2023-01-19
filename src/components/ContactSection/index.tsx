import { FC } from "react";
import AnchorPoint from "../AnchorPoint";
import ContactCard from "./ContactCard";

import { ContactSectionContainer, Content, Title } from "./styles";

const ContactSection: FC = () => {
  return (
    <ContactSectionContainer>
      <Content>
        <AnchorPoint id="contact" offset={140} />
        <Title>
          Vamos marcar uma conversa e desenvolver nossa{" "}
          <span>criatividade</span> juntos?
        </Title>
        <p>
          Você pode entrar em contato comigo através de uma das redes sociais
          exibidas ao lado. Sinta-se a vontade para deixar uma sugestão,
          feedback ou até mesmo uma proposta de vaga! 😉
        </p>
      </Content>
      <Content>
        <ul>
          <li aria-label="WhatsApp">
            <ContactCard variant="whatsapp" />
          </li>
          <li aria-label="E-mail">
            <ContactCard variant="email" />
          </li>
          <li aria-label="LinkedIn">
            <ContactCard variant="linkedin" />
          </li>
        </ul>
      </Content>
    </ContactSectionContainer>
  );
};

export default ContactSection;
