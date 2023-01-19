import {
  type FC,
  type PropsWithChildren,
  type ButtonHTMLAttributes,
} from "react";

import { Button } from "./styles";
import { ThemeButtonProps } from "./types";

const ThemeButton: FC<
  PropsWithChildren<ThemeButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export default ThemeButton;
export { default as ThemeLinkButton } from "./LinkButton";
export { default as ThemeAnchorButton } from "./AnchorButton";
