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
        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 ">
  <h3 className="text-xl font-bold">What is the entire township area of My Home Anandam Whitefield?</h3>
  <p>
    The project covers around <strong>53 acres</strong>, including 45 acres of residential development and 8 acres of commercial space, with approximately <IntLink href="/master-plan">70% open space</IntLink>.
  </p>

  <h3 className="text-xl font-bold">How many towers and flats are there at My Home Anandam Whitefield?</h3>
  <p>
    The township will have <strong>27 buildings</strong> in total, including 8 towers in the initial phase, as well as around 5,000 houses across the complex.
  </p>

  <h3 className="text-xl font-bold">What is the current project status?</h3>
  <p>
    <strong>My Home Codename Anandam</strong> is a new launch project, with possession scheduled for 2029.
  </p>

  <h3 className="text-xl font-bold">What is the RERA number for My Home Anandam Whitefield?</h3>
  <p>
    The project is now in the Expression of Interest (EOI) stage, while <strong>Karnataka RERA</strong> registration is pending. Buyers should check the status on the official Karnataka RERA site before making any payments.
  </p>

  <h3 className="text-xl font-bold">How can I get the most recent brochure for My Home Anandam Whitefield?</h3>
  <p>
    You may get the most recent brochure by completing the inquiry form on this website or by contacting our adviser directly for project information, <IntLink href="/price">pricing</IntLink>, and site visit scheduling.
  </p>
</div>
      </div>
    </section>
  );
}