import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeyWords: (keywords: string) => void;
}

export const Search = ({ keywords, setKeyWords }: Props) => {
  return (
    <div className={styles.search}>
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
