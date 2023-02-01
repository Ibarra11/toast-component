import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);
  console.log(toastList);
  return (
    <ol
      role="region"
      aria-live="assertive"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
