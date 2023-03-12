
import css from "./LanguageSwitcher.module.scss";
import { createClassName } from "shared/lib/createClassName";
import { AppButton } from "shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  additionalClassName?: string;
}

export function LanguageSwitcher({ additionalClassName }: LanguageSwitcherProps) {
  const { t,i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={createClassName(css.LanguageSwitcher, {}, [additionalClassName])}>
      <AppButton onClick={toggleLanguage}>{t("LANGUAGE")}</AppButton>
    </div>
  );
}
