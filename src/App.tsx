import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { className } from "./healper/className";

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
