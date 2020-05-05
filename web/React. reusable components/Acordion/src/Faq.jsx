import React from "react";

function Faq({ faq, index, toggleHandler }) {
  return (
    <div
      className={"faq" + (faq.open ? " open" : "")}
      key={index}
      onClick={() => toggleHandler(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}

export default Faq;
