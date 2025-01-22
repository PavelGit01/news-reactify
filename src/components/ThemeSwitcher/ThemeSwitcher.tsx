import { FaMoon } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      {isDark ? (
        <FaRegMoon
          style={{ height: "30px", width: "30px", color: "white" }}
          onClick={toggleTheme}
        />
      ) : (
        <FaMoon
          style={{ height: "30px", width: "30px" }}
          onClick={toggleTheme}
        />
      )}
    </>
  );
};
