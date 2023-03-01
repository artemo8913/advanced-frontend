import React from "react";
import css from "./Sidebar.module.scss";
import { createClassName } from "shared/lib/createClassName";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher/ui/LanguageSwitcher";

interface SidebarProps {
  additionalClassName?: string;
}

export function Sidebar({ additionalClassName }: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false);
  function toggleCollapsed() {
    setCollapsed((prev) => !prev);
  }
  return (
    <div
      className={createClassName(css.Sidebar, { [css.collapsed]: collapsed }, [
        additionalClassName,
      ])}
    >
      <button onClick={() => toggleCollapsed()}>toggle</button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
