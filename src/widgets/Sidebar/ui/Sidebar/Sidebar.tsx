import React from "react";
import css from "./Sidebar.module.scss";
import { createClassName } from "shared/lib/createClassName";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
interface SidebarProps {
  additionalClassName?: string;
}

export function Sidebar({ additionalClassName }: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false);
  const { t } = useTranslation();
  function toggleCollapsed() {
    setCollapsed((prev) => !prev);
  }
  return (
    <div className={createClassName(css.Sidebar, { [css.collapsed]: collapsed }, [additionalClassName])}>
      <button onClick={() => toggleCollapsed()}>{t("TOGGLE")}</button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
