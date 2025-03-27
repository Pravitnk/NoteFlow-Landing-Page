import { React, useState } from "react";
import { motion } from "motion/react";
import FAQ from "./FAQ";

const FAQlist = ({
  category,
  questions,
  activeQuestions,
  handleQuestionClick,
}) => {
  const [inView, setInView] = useState(false);
  return (
    <motion.ul
      className="m-auto flex max-w-[826px] flex-col gap-y-14 max-lg:gap-y-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={{
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: "easeIn",
          },
        },
      }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: "100%" }}
    >
      {questions?.map((ques) => (
        <FAQ
          key={ques.id}
          questions={ques}
          activeQuestions={activeQuestions}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  );
};

export default FAQlist;
