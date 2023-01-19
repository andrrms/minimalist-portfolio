import { type LinkProps } from "react-router-dom";
import { type FC, type PropsWithChildren } from "react";

import { Link } from "./styles";
import { ThemeButtonProps } from "./types";

const ThemeLinkButton: FC<PropsWithChildren<ThemeButtonProps & LinkProps>> = ({
  children,
  to,
  ...args
}) => {
  return (
    <Link to={to} {...args}>
      {children}
    </Link>
  );
};

export default ThemeLinkButton;
