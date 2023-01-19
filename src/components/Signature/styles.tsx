import styled, { keyframes } from "styled-components";

const SignAnimation = keyframes`
	to {
		stroke-dashoffset: 0;
	}
`;

export const SignatureContainer = styled.figure`
  height: fit-content;

  svg {
    --dash-size: 1052.5;

    color: #fff;
    stroke-dasharray: var(--dash-size);
    stroke-dashoffset: var(--dash-size);

    aspect-ratio: 3.13 / 1;

    animation: ${SignAnimation} 4s ease-out forwards;
    animation-delay: 0.5s;
  }
`;
