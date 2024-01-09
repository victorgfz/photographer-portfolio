import React from "react";

export const CursorContext = React.createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const movement = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", movement);
    return () => {
      window.removeEventListener("mousemove", movement);
    };
  });
  const CursorVariants = {
    default: {
      x: cursorPos.x,
      y: cursorPos.y,
    },
  };
  return (
    <CursorContext.Provider value={{ CursorVariants }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
