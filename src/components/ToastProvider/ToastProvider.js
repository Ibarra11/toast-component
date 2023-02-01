import React, { useCallback } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  const resetToast = useCallback(() => {
    setToastList([]);
  }, []);
  useEscapeKey(resetToast);
  const addToast = React.useCallback(function addToast(toast) {
    setToastList((prevToastList) => {
      return [
        ...prevToastList,
        {
          id: Math.random(),
          message: toast.message,
          variant: toast.variant,
        },
      ];
    });
  }, []);

  const dismissToast = React.useCallback(function dismissToast(id) {
    setToastList((prevToastList) => {
      const newToastList = prevToastList.filter((toast) => toast.id !== id);
      return newToastList;
    });
  }, []);

  const value = React.useMemo(
    () => ({ addToast, dismissToast, toastList }),
    [toastList, dismissToast, addToast]
  );
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
