import React from "react";
import Logo from "../icons/Logo";
import { navigationLinks } from "../../utils/content";
import { useModalContent } from "../../context/ModalContext";
import MobileMenuIcon from "./mobileMenu/MobileMenuIcon";

const Navigation = () => {
  const { setActiveModal } = useModalContent();
  return (
    <nav className="text-primary-50 m-auto flex max-w-[90rem] justify-between px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6">
      <a href="#" className="flex items-center gap-3 max-md:gap-x-2">
        <Logo
          className="h-6 max-md:h-5"
          width={4.5}
          alt="note flow logo icon"
        />
        <p className="text-xl font-bold tracking-tight max-md:text-lg/8">
          NoteFlow
        </p>
      </a>

      <ul className="flex items-center gap-x-8 max-xl:gap-x-6 max-lg:hidden">
        {navigationLinks?.map((link) => (
          <li key={link.id}>
            <a
              className="hover:text-primary-500 transition-property"
              href={link.href}
            >
              {link.link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-x-3 max-lg:hidden">
        <button
          className="border-primary-50 transition-property hover:bg-primary-50 hover:text-primary-1300 cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-8 max-xl:py-3 max-xl:text-base/loose"
          onClick={() => setActiveModal("login")}
        >
          Login
        </button>

        <button
          className="border-primary-500 bg-primary-500 transition-property hover:bg-primary-50 hover:border-primary-50 text-primary-1300 primary-glow primary-glow-hover cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-8 max-xl:py-3 max-xl:text-base/loose"
          onClick={() => setActiveModal("sign-up")}
        >
          Get Started
        </button>
      </div>

      {/* mobile icon */}
      <MobileMenuIcon />
    </nav>
  );
};

export default Navigation;
