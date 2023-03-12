import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider/index";
import { createClassName } from "shared/lib/createClassName";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/ThemeProvider/router";

export function App () {
  const { theme } = useTheme();
  return (
    <div className={createClassName("app", {}, [theme])}>
      <Suspense fallback="loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
