import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { ThemeButtonProps } from "./types";

export const ButtonStyle = css<ThemeButtonProps>`
  font-family: var(--font-inter);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  text-decoration: none;

  background-color: var(--color-gray-1);
  color: var(--color-gray-5);
  border: 2px solid var(--color-gray-1);
  border-radius: 8px;

  padding: 7px 16px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  transition: 0.2s ease;
  &:hover {
    background-color: var(--color-gray-2);
    border-color: var(--color-gray-2);
  }

  &:has(svg:only-child) {
    padding: 10px;

    svg {
      font-size: 1.4rem;
    }
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--color-primary);
      border-color: var(--color-primary);
      color: var(--color-black-fixed);

      &:hover {
        background-color: var(--color-primary-50);
        border-color: var(--color-primary-50);
        color: var(--color-white-fixed);
      }
    `}

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: var(--color-white-fixed);

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: transparent;
      }
    `}

	${({ muted }) =>
    muted &&
    css`
      background-color: var(--color-gray-3);
      border-color: var(--color-gray-3);
      color: var(--color-black-fixed);

      &:hover {
        background-color: var(--color-gray-4);
        border-color: var(--color-gray-4);
        color: var(--color-white-fixed);
      }
    `}

	${({ small }) =>
    small &&
    css`
      font-size: 1rem;
      line-height: 1.2rem;

      padding: 4px 10px;

      border-radius: 6px;

      &:has(svg:only-child) {
        padding: 6px;

        svg {
          font-size: 1.2rem;
        }
      }
    `}

	${({ round }) =>
    round &&
    css`
      border-radius: 50%;
    `}
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const Link = styled(RouterLink)`
  ${ButtonStyle}
`;

export const Anchor = styled.a`
  ${ButtonStyle}
`;
