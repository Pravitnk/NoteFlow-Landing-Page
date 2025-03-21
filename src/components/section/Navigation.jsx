import React from "react";
import Logo from "../icons/Logo";
import { navigationLinks } from "../../utils/content";

const Navigation = () => {
  return (
    <nav className="text-primary-50 m-auto flex max-w-[90rem] justify-between px-24 text-lg/8 font-light">
      <a href="#" className="flex items-center gap-3">
        <Logo className="h-6" width={4.5} />
        <p className="text-xl font-bold tracking-tight">NoteFlow</p>
      </a>

      <ul className="flex items-center gap-x-8">
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

      <div className="flex items-center gap-x-3">
        <button className="border-primary-50 transition-property hover:bg-primary-50 hover:text-primary-1300 cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal">
          Login
        </button>

        <button className="border-primary-500 bg-primary-500 transition-property hover:bg-primary-50 hover:border-primary-50 text-primary-1300 primary-glow primary-glow-hover cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal">
          Get Started
        </button>
      </div>

      {/* mobile icon */}
    </nav>
  );
};

export default Navigation;
