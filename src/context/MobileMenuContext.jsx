import { createContext, useContext, useState } from "react";

const MobileMenContext = createContext();

const MobileMenuContextProvider = ({ children }) => {
  const [mobileMenuOpened, setmobileMenuOpened] = useState(false);

  return (
    <MobileMenContext.Provider
      value={{ mobileMenuOpened, setmobileMenuOpened }}
    >
      {children}
    </MobileMenContext.Provider>
  );
};

const useMobileMenuContent = () => {
  return useContext(MobileMenContext);
};

export { MobileMenuContextProvider, useMobileMenuContent };
