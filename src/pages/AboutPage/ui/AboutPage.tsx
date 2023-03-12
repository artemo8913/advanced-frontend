
import { useTranslation } from "react-i18next";
export default function AboutPage() {
  const { t } = useTranslation();
  return <div>{t("ABOUT PAGE")}</div>;
}
