import React from "react";
import { motion } from "motion/react";
import Close from "../../icons/Close";
import { navigationLinks } from "../../../utils/content";
import { useMobileMenuContent } from "../../../context/MobileMenuContext";
import { useModalContent } from "../../../context/ModalContext";

const MobileMenu = () => {
  const { mobileMenuOpened, setmobileMenuOpened } = useMobileMenuContent();
  const { setActiveModal } = useModalContent();

  const handleGetStarted = () => {
    setmobileMenuOpened(false);
    setActiveModal("sign-up");
  };

  const handlelogin = () => {
    setmobileMenuOpened(false);
    setActiveModal("login");
  };

  return (
    <motion.div
      className="bg-primary-1300/50 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-end px-6 py-6 pl-28 backdrop-blur-sm"
      animate={mobileMenuOpened ? "visible" : "hidden"}
      variants={{
        visible: {
          opacity: 100,
          visibility: "visible",
        },
        hidden: {
          opacity: 0,
          visibility: "hidden",
        },
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        className="bg-primary-1400 flex basis-80 flex-col justify-between rounded-2xl bg-[url('../src/assets/Noise.webp')] bg-repeat px-6 py-8"
        animate={mobileMenuOpened ? "visible" : "hidden"}
        variants={{
          visible: {
            x: "0%",
            opacity: 100,
            visibility: "visible",
          },
          hidden: {
            x: "100%",
            opacity: 0,
            visibility: "hidden",
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="">
          <button
            className="border-primary-75 hover:bg-primary-75 group transition-property mr-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
            onClick={() => setmobileMenuOpened(false)}
          >
            <Close
              width={2}
              className="stroke-primary-75 group-hover:stroke-primary-1300 transition-property h-4 w-4"
            />
          </button>
          <ul className="mt-16 flex flex-col gap-y-6">
            {navigationLinks?.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-primary-50 hover:text-primary-500 transition-property text-lg/8"
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-3">
          <button
            className="border-primary-50 transition-property hover:bg-primary-50 text-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 px-6 py-3 text-lg/8 font-normal"
            onClick={handlelogin}
          >
            Login
          </button>
          <button
            className="border-primary-500 bg-primary-500 transition-property hover:bg-primary-50 hover:border-primary-50 text-primary-1300 primary-glow primary-glow-hover cursor-pointer rounded-full border-2 px-6 py-3 text-lg/8 font-normal"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
