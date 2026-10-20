/* eslint-disable react/no-unescaped-entities */
import { ExtLink } from "./SeoLinks";

export default function ReraLegalAndApproval() {
  return (
    <section
      id="rera-legal-approval"
      aria-labelledby="rera-legal-approval-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="rera-legal-approval-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
            RERA, Legal and Approval Information
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">

            <img
              className="w-full lg:w-1/2 mx-auto"
              src="/images/rera-legal-approval.webp"
              alt="My Home Anandam RERA, legal and approval information" width={1200} height={675}
              loading="lazy"
            />
  <p>
    One of the most important things buyers should check before making a financial commitment is <strong>My Home Anandam's legal standing</strong>. In preliminary listings, the project is shown as an upcoming residential development. The registration information in those listings shows that Karnataka RERA details are either being prepared or are still awaited.
  </p>

  <p>
    Use formal records to confirm the final registration number, accepted phase information, and ownership plan. People interested in buying a project shouldn't assume it is listed just because the website calls it a launch or pre-launch opportunity.
  </p>

  <p>
    The <ExtLink href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016">Real Estate (Regulation and Development) Act, 2016</ExtLink>, sets rules that are meant to make real estate transactions more open and accountable. Under the Act, projects that must be listed with the state RERA authority must do so before they can be advertised, marketed, booked, or sold, though some exceptions and rules apply.
  </p>

  <p>
    <strong>Karnataka RERA</strong> is the organization that you should talk to about a project in Bengaluru.
  </p>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>RERA registration number</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Awaited / Under Process
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>State RERA authority</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA</ExtLink>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Promoter</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          My Home Group
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Registration status</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Applied / Awaited
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Approved layout status</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Reported BDA Approval; verify for specific tower/phase
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Development authority</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <ExtLink href="https://bdabangalore.org/">Bangalore Development Authority (BDA)</ExtLink> - Reported
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Land title</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Not publicly available — request documents from the promoter
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Encumbrance information</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Not publicly available
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Environmental / planning approvals</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Information awaited
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Official documents</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Refer to individual project K-RERA registration
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <strong>Date checked</strong>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          01 Oct 2026
        </td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </section>
  );
}
