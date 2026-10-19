/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-gray-900 text-center mb-3"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base mb-10">
          Everything you need to know about My Home Anandam.
        </p>
      </div>
    </section>
  );
}