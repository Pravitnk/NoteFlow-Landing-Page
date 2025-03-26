import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState("");

  return (
    <ModalContext.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContent = () => {
  return useContext(ModalContext);
};

export { ModalContextProvider, useModalContent };
