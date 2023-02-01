import React from "react";
function useEscapeKey(cb) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        cb();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [cb]);
  return null;
}

export default useEscapeKey;
