import { useState, useContext, createContext } from "react";

const ToastContext = createContext(null);

export default function ToastContextProvider({ children }) {
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState({
    msg: "",
    title: "",
  });
  return (
    <ToastContext.Provider value={{ show, setShow, toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error(
      "Toast context must be wrapped inside toast context provider"
    );
  return context;
};
