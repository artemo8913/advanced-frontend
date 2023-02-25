import css from "./ThemeSwitcher.module.scss";
import { createClassName } from "shared/lib/createClassName";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import IconLightTheme from "shared/assets/icons/theme-light.svg";
import IconDarkTheme from "shared/assets/icons/theme-dark.svg";
import { AppButton } from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
  additionalClassName?: string;
}

export function ThemeSwitcher({ additionalClassName }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={createClassName(css.ThemeSwitcher, {}, [additionalClassName])}
    >
      <AppButton onClick={() => toggleTheme()}>
        {theme === Theme.NORMAL ? <IconLightTheme /> : <IconDarkTheme />}
      </AppButton>
    </div>
  );
}
