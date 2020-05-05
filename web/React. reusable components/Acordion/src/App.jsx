import React, { useState } from "react";
import Header from "./Header";
import Faq from "./Faq";

function App() {
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw in a lightbulb?",
      answer: "None. We don't address hardware issues.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You. The Viewer.",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false,
    },
  ]);

  const toggleHandler = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = true;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleHandler={toggleHandler} />
        ))}
      </div>
    </div>
  );
}

export default App;
