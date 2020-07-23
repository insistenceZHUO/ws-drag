import React from "react";
import classname from "classname";
import styles from "./index.module.less";

export default function(props) {
  return (
    <button
      className={classname(styles.largr, styles.bold)}
      style={{ color: props.color }}
    >
      {props.children}
    </button>
  );
}
