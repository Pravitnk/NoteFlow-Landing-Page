import React from "react";
import { logos } from "../../utils/content";

const Logo = () => {
  return (
    <section className="bg-gradient-to-top">
      <div className="m-auto max-w-[90rem] px-24 py-28 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <p className="text-primary-50 m-auto mb-20 text-center text-xl max-xl:text-lg/8 max-sm:mb-16">
          Organizations powered by{" "}
          <span className="font-bold tracking-tight">NoteFlow</span>
        </p>
        <div className="flex flex-col gap-y-16 max-md:flex-row max-md:items-center max-md:justify-around max-sm:gap-x-14">
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(0, 4).map((logo) => (
              <li key={logo.id}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 max-xl:h-8 max-lg:h-7 max-sm:h-6"
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(4).map((logo) => (
              <li key={logo.id}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 max-xl:h-8 max-lg:h-7 max-sm:h-6"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Logo;
