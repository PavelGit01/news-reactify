import styles from "./styles.module.css";

interface Props {
  image: string;
}

export const Image = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image && <img src={image} alt="News" className={styles.image} />}
    </div>
  );
};
