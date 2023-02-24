import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import css from "./AppLink.module.scss";
import { createClassName } from "shared/lib/createClassName";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  additionalClassName?: string;
  theme?: AppLinkTheme;
}

export function AppLink(props: PropsWithChildren<AppLinkProps>) {
  const { children, to, additionalClassName, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link {...otherProps} to={to} className={createClassName(css.appLink, {}, [additionalClassName, css[theme]])}>
      {children}
    </Link>
  );
}
