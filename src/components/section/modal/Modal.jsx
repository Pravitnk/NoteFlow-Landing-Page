import React from "react";
import { motion } from "motion/react";
import { useModalContent } from "../../../context/ModalContext";

const Modal = ({ children, modal }) => {
  const { activeModal } = useModalContent();
  const activelyDisplayedModals = modal === activeModal;
  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center px-24 py-32 backdrop-blur-sm"
      animate={activelyDisplayedModals ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          visibility: "hidden",
        },
        visible: {
          opacity: 100,
          visibility: "visible",
        },
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="flex overflow-hidden rounded-2xl opacity-0 shadow-[opx,opx,20px,rgb(6,18,18,0.1)]"
        initial={{ opacity: 0, y: 40 }}
        animate={
          activelyDisplayedModals
            ? { opacity: 100, y: 0 }
            : { opacity: 0, y: 30 }
        }
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
