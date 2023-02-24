import { useTheme } from "app/providers/ThemeProvider/index";
import { createClassName } from "shared/lib/createClassName";
import { Navbar } from "widgets/Navbar";

export function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={createClassName("app", {}, [theme])}>
      <Navbar />
      <button onClick={() => toggleTheme()}>Сменить тему</button>
    </div>
  );
}
