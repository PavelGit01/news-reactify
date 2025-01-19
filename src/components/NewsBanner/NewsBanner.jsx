import React from "react";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
import { Image } from "../Image/Image";

const NewsBanner = ({ item }) => {
  if (!item) {
    return <h3>По вашему запросу ничего не найдено :{"("}</h3>;
  }
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};



export default NewsBanner;
