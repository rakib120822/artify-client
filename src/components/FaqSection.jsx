import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
const faqs = [
  {
    question: "How do I submit my artwork?",
    answer:
      "You can submit your artwork by clicking 'Upload Your Art' in the dashboard and following the instructions.",
  },
  {
    question: "Can I sell my artwork on Artify?",
    answer:
      "Currently, Artify focuses on showcasing and sharing art. Selling features may be added in the future.",
  },
  {
    question: "Is there a community for feedback?",
    answer:
      "Yes! You can join our community to share feedback, participate in discussions, and connect with other artists.",
  },
];
const FaqSection = () => {
  return (
    <div>
      {/* FAQ Section */}
      <section className="py-16 px-5">
        <div className="  text-center">
          <h2 className="text-4xl font-bold mb-10">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
          <div className="space-y-4   text-left">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-base-100 rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <summary className="font-semibold text-lg flex items-center gap-2">
                  <FaQuestionCircle className="text-primary" /> {faq.question}
                </summary>
                <p className="mt-2 text-base-content/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
