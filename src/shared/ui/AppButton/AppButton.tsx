import css from "./AppButton.module.scss";
import { createClassName } from "shared/lib/createClassName";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClassName?: string;
  theme?: AppButtonTheme;
}

export enum AppButtonTheme {
  CLEAR = "clear",
}

export function AppButton(props: PropsWithChildren<AppButtonProps>) {
  const { additionalClassName, children, theme = AppButtonTheme.CLEAR, ...otherProps } = props;
  return (
    <button className={createClassName(css.AppButton, {}, [additionalClassName, css[theme]])} {...otherProps}>
      {children}
    </button>
  );
}
