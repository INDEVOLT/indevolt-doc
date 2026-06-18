import React, { useState } from "react";
import styles from "./styles.module.css";

export default function ApiBlock({ method = "GET", path, children }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(path);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.apiBlock}>
      <div className={styles.header}>
        <span className={`${styles.badge} ${styles[method.toLowerCase()]}`}>
          {method}
        </span>

        <code className={styles.path}>{path}</code>

        <button className={styles.copy} onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className={styles.body}>{children}</div>
    </div>
  );
}