import { createClassName } from "shared/lib/createClassName";
import { AppLink, AppLinkTheme } from "shared/ui/";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import css from "./Navbar.module.scss";

interface NavbarProps {
  additionalClassName?: string;
}

export function Navbar({ additionalClassName }: NavbarProps) {
  return (
    <div className={createClassName(css.Navbar, {}, [additionalClassName])}>
      <ThemeSwitcher />
      <div className={createClassName(css.links)}>
        <AppLink additionalClassName={css.mainLink} theme={AppLinkTheme.PRIMARY} to={"/"}>Главная страница</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О комании</AppLink>
      </div>
    </div>
  );
}
