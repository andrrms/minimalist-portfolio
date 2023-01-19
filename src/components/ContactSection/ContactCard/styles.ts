import styled, { css } from "styled-components";
import { CardProps } from "./types";

export const ContactCardContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const CardIcon = styled.figure<CardProps>`
  width: 100px;
  height: 100px;
  border-radius: 10px;

  display: grid;
  place-items: center;

  transition: 0.2s ease;

  svg {
    font-size: 2rem;
  }

  ${ContactCardContainer}:hover & {
    filter: brightness(1.5);
  }

  ${({ variant }) => {
    switch (variant) {
      case "whatsapp": {
        return css`
          background: linear-gradient(
            to bottom,
            rgba(var(--color-secondary-rgb), 0.2),
            rgba(var(--color-secondary-rgb), 0.3)
          );

          svg {
            color: var(--color-white-fixed);
          }
        `;
      }

      case "email": {
        return css`
          background: linear-gradient(
            to bottom,
            rgba(var(--color-instagram-rgb), 0.2),
            rgba(var(--color-instagram-rgb), 0.3)
          );

          svg {
            color: var(--color-white-fixed);
          }
        `;
      }

      case "linkedin": {
        return css`
          background: linear-gradient(
            to bottom,
            rgba(var(--color-linkedin-rgb), 0.2),
            rgba(var(--color-linkedin-rgb), 0.3)
          );

          svg {
            color: var(--color-white-fixed);
          }
        `;
      }
    }
  }}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  h3 {
    font-size: 1.4rem;
  }

  a {
    width: fit-content;
  }
`;
