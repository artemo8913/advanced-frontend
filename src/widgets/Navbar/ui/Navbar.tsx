import { useTranslation } from "react-i18next";
import { createClassName } from "shared/lib/createClassName";
import { AppLink, AppLinkTheme } from "shared/ui/";
import css from "./Navbar.module.scss";
interface NavbarProps {
  additionalClassName?: string;
}

export function Navbar({ additionalClassName }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <div className={createClassName(css.Navbar, {}, [additionalClassName])}>
      <div className={createClassName(css.links)}>
        <AppLink additionalClassName={css.mainLink} theme={AppLinkTheme.PRIMARY} to={"/"}>
          {t("MAIN PAGE")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          {t("ABOUT PAGE")}
        </AppLink>
      </div>
    </div>
  );
}
