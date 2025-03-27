import React, { useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content";
import FAQlist from "./FAQlist";
import { hover } from "motion";

const FAQs = () => {
  const [category, setCategory] = useState("General");
  const [activeQuestions, setActiveQuestions] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0);

  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) =>
    id === activeQuestions ? setActiveQuestions(null) : setActiveQuestions(id);

  const handleCategoryClick = (category) => {
    setActiveQuestions(null);
    setCategory(category);
  };

  return (
    <section className="bg-gradient-to-bottom justify-items-center">
      <div className="w-full max-w-[90%] py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tight max-xl:mb-6 max-xl:text-5xl/16 max-lg:text-4xl/10 max-md:mb-4 max-md:text-left max-sm:text-3xl/9 max-sm:tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 text-xl/loose font-light max-lg:text-lg/8 max-sm:text-base/loose">
          <p className="text-primary-100 text-center max-md:text-left max-sm:hidden">
            The most commonly asked questions about NoteFlow.{" "}
            <br className="max-md:hidden" />
            Have any other questions?{" "}
            <a
              href="#"
              className="transition-property decoration-1 underline-offset-4 hover:underline"
            >
              Chat with our expert tech team
            </a>
          </p>
        </div>

        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4 max-lg:mb-18 max-md:justify-start">
          {frequentlyAskedQuestions.map((categ) => (
            <li key={categ.id}>
              <button
                onClick={() => handleCategoryClick(categ.category)}
                className={`border-primary-50 text-primary-50 transition-property cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose max-sm:py-3 ${categ.category === category && "bg-primary-500 text-primary-1300 border-primary-500 primary-glow"} ${categ.category !== category && "hover:bg-primary-50 hover:text-primary-1300"}`}
              >
                {categ.category}
              </button>
            </li>
          ))}
        </ul>
        <FAQlist
          category={category}
          questions={questionsArr}
          activeQuestions={activeQuestions}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
};

export default FAQs;
