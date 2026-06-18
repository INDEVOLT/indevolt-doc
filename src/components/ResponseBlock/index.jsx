import React from "react";
import styles from "./styles.module.css";

export default function ResponseBlock({
  status = "200 OK",
  children,
}) {
  const statusCode = status.split(" ")[0]; // 200 / 400 / 500

  return (
    <div className={styles.responseBlock}>
      {/* Header */}
      <div className={`${styles.status} ${styles[`s${statusCode}`]}`}>
        {status}
      </div>

      {/* Body */}
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
}