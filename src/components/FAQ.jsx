import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Kahoot! app?",
      answer:
        "The Kahoot! app lets you create, host, play and learn through interactive quizzes and games."
    },
    {
      question: "Is Kahoot! free?",
      answer:
        "Yes. Kahoot! offers free features, with additional features available through paid plans."
    },
    {
      question: "How do I download the Kahoot! app?",
      answer:
        "You can download the Kahoot! app from the App Store or Google Play."
    },
    {
      question: "Does Kahoot! work on iPhone and Android?",
      answer:
        "Yes. Kahoot! is available on both iPhone and Android devices."
    },
    {
      question: "How can I use kahoot as a trivia app?",
      answer:
        "You can use Kahoot! to create or play trivia games with friends, family, classmates or groups."
    },
    {
      question: "How can I use kahoot as a quiz game app?",
      answer:
        "You can join or create quiz games and answer questions interactively using the Kahoot! app."
    },
    {
      question: "How can I use kahoot as a quiz maker app?",
      answer:
        "You can create your own quizzes, trivia games and study sets on different topics."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-container">

        <p className="faq-label">FAQ</p>

        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "faq-open" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{faq.question}</span>

                <span className="faq-arrow">
                  {openIndex === index ? "⌃" : "⌄"}
                </span>

              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;