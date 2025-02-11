import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeyWords: (keywords: string) => void;
}

export const Search = ({ keywords, setKeyWords }: Props) => {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeyWords(e.target.value)}
        className={styles.input}
        placeholder="Javascript"
      />
    </div>
  );
};
