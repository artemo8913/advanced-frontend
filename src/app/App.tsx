import { useTheme } from "app/providers/ThemeProvider/index";
import { createClassName } from "shared/lib/createClassName";
import { Navbar } from "widgets/Navbar";

export function App() {
  const { theme } = useTheme();
  return (
    <div className={createClassName("app", {}, [theme])}>
      <Navbar />
    </div>
  );
}
