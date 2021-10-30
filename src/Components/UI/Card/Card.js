import React from "react";

import styles from "./Card.module.css";

function Card(props) {
  // const classes = props.className + " " + styles.card;
  return (
    <div className={`${props.className} ${styles.card}`}>{props.children}</div>
  );
}

export default Card;
