import {
  type FC,
  type PropsWithChildren,
  type AnchorHTMLAttributes,
} from "react";

import { Anchor } from "./styles";
import { ThemeButtonProps } from "./types";

const ThemeAnchorButton: FC<
  PropsWithChildren<ThemeButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, ...args }) => {
  return <Anchor {...args}>{children}</Anchor>;
};

export default ThemeAnchorButton;
