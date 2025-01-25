import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import styles from "./styles.module.css";
import { INews } from "../..";
import { Image } from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
}

export const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item?.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={`${item.url}`}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul className={styles.categoryList}>
          {item.category.map((category) => {
            return (
              <li className={styles.active} key={category}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
