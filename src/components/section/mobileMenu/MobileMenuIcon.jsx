import React from "react";
import { motion } from "motion/react";
import Menu from "../../icons/Menu";
import { useMobileMenuContent } from "../../../context/MobileMenuContext";

const MobileMenuIcon = () => {
  const { mobileMenuOpened, setmobileMenuOpened } = useMobileMenuContent();
  return (
    <motion.button
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="hidden items-center justify-center max-lg:flex"
      onClick={() => setmobileMenuOpened(true)}
    >
      <Menu
        className="stroke-primary-50 h-7 w-7 cursor-pointer"
        width={2}
        alt="menu Icon"
      />
    </motion.button>
  );
};

export default MobileMenuIcon;
