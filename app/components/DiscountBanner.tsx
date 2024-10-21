import React from "react";
import styles from "./banner.module.css";
import { debug } from "console";

interface Props {
  text: string
  start: Date,
  end: Date
};

const DiscountBanner: React.FC<Props> = ({ text, start, end }) => {
  if (new Date() < start || new Date() > end)
    return null;

  return (
    <div className={styles.discountContainer}>
      <p className={styles.discount}>{text}</p>
    </div>
  )
}

export default DiscountBanner;
