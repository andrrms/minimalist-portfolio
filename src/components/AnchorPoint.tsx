import styled from "styled-components";

interface AnchorPointProps {
  id: string;
  offset?: number;
}

const AnchorPoint = styled.div<AnchorPointProps>`
  position: relative;
  top: ${({ offset }) => (offset ? -`${offset}px` : "-80px")};
`;

export default AnchorPoint;
