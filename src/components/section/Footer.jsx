import React from "react";
import { footerCols } from "../../utils/content";
import Logo from "../icons/Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bottom">
      <div className="m-auto flex max-w-[90rem] justify-between px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:grid max-lg:gap-y-18 max-lg:px-8 max-sm:pb-16">
        {/* left  */}
        <div className="">
          <a href="#" className="flex items-center gap-x-3">
            <Logo className="stroke-primary-500" width={4.5} alt="logo" />
            <p className="text-primary-50 text-xl font-bold tracking-tight">
              NoteFlow
            </p>
          </a>
        </div>

        {/* right */}
        <div className="grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18 max-lg:gap-x-24">
          {footerCols?.map((col) => (
            <div key={col.id}>
              <p className="text-primary-50 mb-8 text-xl/loose font-semibold">
                {col.category}
              </p>
              <ul className="flex flex-col gap-y-4">
                {col?.links?.map((link, i) => (
                  <li key={i} className="cursor-pointer">
                    <a
                      href="#"
                      className="text-primary-50 hover:text-primary-500 transition-property text-lg/8 font-light underline-offset-2 hover:underline max-xl:text-base/loose"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
