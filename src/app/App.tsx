import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/index";
import { MainPageAsync } from "pages/MainPage";
import { AboutPageAsync } from "pages/AboutPage";
import { className } from "shared/lib/className";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={() => toggleTheme()}>Сменить тему</button>
      <Link to={"/main"}>Главная страница</Link>
      <Link to={"/about"}>О комании</Link>
      <Suspense fallback={<div>Laoding...</div>}>
        <Routes>
          <Route element={<MainPageAsync />} path="/main" />
          <Route element={<AboutPageAsync />} path="/about" />
        </Routes>
      </Suspense>
    </div>
  );
}
