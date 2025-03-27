import React from "react";
import { motion } from "motion/react";
import CaretUp from "../../icons/CaretUp";

const FAQ = ({ questions, activeQuestions, handleQuestionClick }) => {
  const itemVarients = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: { opacity: 100, y: 0 },
  };

  return (
    <motion.li variants={itemVarients} className="shrink-0 grow-0">
      <button
        className="flex w-full cursor-pointer items-center"
        onClick={() => handleQuestionClick(questions.id)}
      >
        <div className="border-primary-50 mr-6 rounded-xl border-2 p-3.5">
          <questions.Icon
            width={2}
            className="stroke-primary-50"
            alt={questions.alt}
          />
        </div>

        <p className="text-primary-50 mr-auto pr-4 text-left text-xl/loose font-semibold tracking-normal max-lg:text-lg/8">
          {questions.question}
        </p>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <CaretUp
            className="stroke-primary-50"
            activeQuestion={activeQuestions === questions.id}
            width={2.5}
            alt="Caret Up Icon"
          />
        </div>
      </button>

      <motion.p
        className="text-primary-50 pt-0 pr-14 pl-20 text-lg/8 font-light max-lg:text-base/loose"
        initial={{ opacity: 0, maxHeight: 0, visibility: "hidden" }}
        animate={
          activeQuestions === questions.id
            ? {
                opacity: 1,
                maxHeight: "300px",
                visibility: "visible",
                paddingTop: "1rem",
              }
            : {}
        }
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        layout
      >
        {questions.answer}
      </motion.p>
    </motion.li>
  );
};

export default FAQ;
