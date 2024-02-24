import React from "react";
import { Lato_700 } from "../layout";

const faqs = [
  {
    question: "What is Ellie Smart Home Systems?",
    answer:
      "Ellie Smart Home Systems is a leading provider of innovative smart home solutions designed to enhance convenience, efficiency, and security in residential and commercial environments. We offer a range of products and services that integrate cutting-edge technologies such as artificial intelligence, IoT connectivity, and advanced automation to create intelligent living and working spaces.",
  },
  {
    question: "What sets Ellie Smart Home Systems apart from other providers?",
    answer:
      "At Ellie, we differentiate ourselves by our commitment to delivering tailor-made smart home solutions that are intuitive, reliable, and future-proof. Our team of experts combines technical expertise with a deep understanding of customer needs to provide personalized experiences and unparalleled support throughout every step of the journey.",
  },
  {
    question: "How do Ellie Smart Home Systems enhance daily life?",
    answer:
      "Our smart home systems streamline daily tasks, optimize energy usage, and provide enhanced security and comfort. With features such as remote access, automated lighting and temperature control, and intelligent security monitoring, Ellie Smart Home Systems make everyday living easier, safer, and more enjoyable.",
  },
  {
    question:
      "Can Ellie Smart Home Systems be customized to suit individual preferences?",
    answer:
      "Yes, absolutely! We understand that every home and business is unique, which is why we offer customizable solutions tailored to your specific needs and lifestyle. Whether you're looking for a basic setup or a comprehensive smart home ecosystem, our team will work with you to design and implement a solution that meets your requirements.",
  },
  {
    question: "How secure are Ellie Smart Home Systems?",
    answer:
      "Security is our top priority at Ellie Smart Home Systems. We utilize industry-leading encryption protocols and robust authentication mechanisms to safeguard your data and privacy. Additionally, our systems undergo rigorous testing and regular updates to ensure they remain resilient against emerging threats.",
  },
  {
    question: "What kind of support does Ellie Smart Home Systems provide?",
    answer:
      "We provide comprehensive support services to ensure that your smart home system operates smoothly and efficiently. Our team is available to assist you with installation, setup, troubleshooting, and ongoing maintenance. Additionally, we offer educational resources and tutorials to help you make the most of your smart home technology.",
  },
  {
    question: "How can I get started with Ellie Smart Home Systems?",
    answer:
      "Getting started with Ellie Smart Home Systems is easy! Simply contact us to schedule a consultation with one of our experts. We'll assess your needs, discuss your options, and develop a customized solution that fits your budget and requirements. From there, we'll handle the installation and setup process, ensuring a seamless experience from start to finish.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="mb-32 pt-16">
      <h1
        className={`text-3xl lg:text-4xl text-primary drop-shadow mb-4 ${Lato_700.className}`}
      >
        Frequently Asked Questions
      </h1>
      <ul>
        {faqs.map((faq) => (
          <li className="mb-8">
            <h2 className="text-lg block last:mb-0 cursor-pointer mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-400">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
