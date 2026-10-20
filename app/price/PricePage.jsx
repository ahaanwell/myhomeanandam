/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Project Name", "My Home Anandam"],
  ["Developer", "My Home Group"],
  ["Location", "Whitefield–Hoskote Road, East Bengaluru"],
  ["Land Area", "52.5 Acres"],
  ["Towers", "27 Towers"],
  ["Total Units", "5200+ Units"],
  ["Configurations", "2, 3 & 4 BHK Apartments"],
  ["Price", "On Request"],
  ["Project Status", "Pre Launch 2027"],
];

function PricePage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Price"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            My Home Anandam Price
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p>
    The <strong>My Home Anandam price</strong> will be a key factor for home buyers considering purchasing a residential property on <strong>Whitefield–Hoskote Main Road</strong> in <strong>East Bengaluru</strong>. At this time, since the project is still in the <strong>pre-launch stage</strong>, the final prices of apartments, payment schedules and other costs associated with the project are not yet available in the public domain.
  </p>

  <p>
    <IntLink href="/"><strong>My Home Anandam</strong></IntLink> is being developed by <strong>My Home Group</strong> on approximately <strong>52.5 acres</strong> and will include <strong>27 residential towers</strong>, numerous common areas and retail spaces. By understanding the size of proposed <strong>2, 3 &amp; 4 BHK apartments</strong> and what may affect the cost of a property, buyers can begin to develop a budget prior to the announcement of official pricing.
  </p>

  <figure className="space-y-2">
    <Image
      src="/images/banners/my-home-anandam.webp"
      alt="My Home Anandam price – aerial view of 2, 3 & 4 BHK apartment towers on Whitefield–Hoskote Road, Bengaluru"
      title="My Home Anandam Price"
      width={1200}
      sizes="(max-width: 1024px) 100vw, 1024px"
      height={720}
      className="w-full h-auto rounded-lg"
    />
    <figcaption className="text-sm text-gray-500 text-center">
      Artistic impression of My Home Anandam, Whitefield–Hoskote Road, East Bengaluru
    </figcaption>
  </figure>

  <h2 className="text-2xl font-bold">
    My Home Anandam Project Details at a Glance
  </h2>

  <p>
    Before comparing the <strong>My Home Anandam price</strong>, here is a quick overview of the key project details. You can also explore the <IntLink href="/master-plan"><strong>My Home Anandam master plan</strong></IntLink> to see how the towers and open spaces are laid out across the site.
  </p>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <caption className="sr-only">My Home Anandam project details</caption>
    <tbody>
      {projectDetails.map(([label, value]) => (
        <tr key={label}>
          <th scope="row" className="border border-gray-300 px-4 py-2 font-semibold w-2/5">
            {label}
          </th>
          <td className="border border-gray-300 px-4 py-2">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h2 className="text-2xl font-bold">
    My Home Anandam Price: Current Pricing Status
  </h2>

  <p>
    At this time, there is no official <strong>My Home Anandam price list</strong> provided in the project information. Buyers should consider any unverified starting price or configuration-wise quote as provisional and not a set price for the project.
  </p>

  <p>
    The final price will probably be based on the apartment configuration, saleable area, floor level, view, location within the development and the payment terms.
  </p>

  <p>
    The developer's official price sheet will be the best source to compare different units. Since this is <strong>My Home Group's first residential development in Bengaluru</strong>, buyers may also want to review the initial launch terms, booking conditions and any introductory pricing when they are made available.
  </p>

  <h2 className="text-2xl font-bold">
    My Home Anandam Apartment Sizes and Price Considerations
  </h2>

  <p>
    The proposed apartment configurations provide a starting point for understanding the potential cost differences between unit types. The following table summarises the indicative sizes currently available. For room-wise layouts, see the <IntLink href="/floor-plan"><strong>My Home Anandam floor plans</strong></IntLink>.
  </p>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <caption className="sr-only">My Home Anandam apartment sizes and price considerations</caption>
    <thead>
      <tr>
        <th scope="col" className="border border-gray-300 px-4 py-2">
          Apartment Type
        </th>
        <th scope="col" className="border border-gray-300 px-4 py-2">
          Indicative Size
        </th>
        <th scope="col" className="border border-gray-300 px-4 py-2">
          Pricing Consideration
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">2 BHK</td>
        <td className="border border-gray-300 px-4 py-2">1,240–1,300 sq. ft.</td>
        <td className="border border-gray-300 px-4 py-2">
          Compare total cost and usable space
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">3 BHK</td>
        <td className="border border-gray-300 px-4 py-2">1,600–2,000 sq. ft.</td>
        <td className="border border-gray-300 px-4 py-2">
          Evaluate layout and additional room requirements
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">4 BHK</td>
        <td className="border border-gray-300 px-4 py-2">2,300–2,600 sq. ft.</td>
        <td className="border border-gray-300 px-4 py-2">
          Assess the higher overall budget and maintenance costs
        </td>
      </tr>
    </tbody>
  </table>

  <p>
    These figures are indicative apartment sizes, not confirmed carpet areas. Buyers should check whether the final price list quotes super built-up area, saleable area or carpet area as defined under the <ExtLink href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016">Real Estate (Regulation and Development) Act, 2016</ExtLink> before comparing prices.
  </p>

  <h3 className="text-2xl font-bold">
    2 BHK Apartment Price at My Home Anandam
  </h3>

  <p>
    The <strong>2 BHK apartments at My Home Anandam</strong> will be about <strong>1,240 to 1,300 square feet</strong>. These units could be ideal for small families, first-time home buyers, and those who want a somewhat smaller living space.
  </p>

  <p>
    Once the official <strong>My Home Anandam price list</strong> is released, buyers should look at the total cost of purchasing the property instead of just looking at the advertised starting price. Other factors to consider when determining value include usable floor area, bedroom size, amount of storage space, and balcony layout.
  </p>

  <h3 className="text-2xl font-bold">
    3 BHK Apartment Price at My Home Anandam
  </h3>

  <p>
    The <strong>3 BHK apartments at My Home Anandam</strong> will vary in size from approximately <strong>1,600 to 2,000 square feet</strong>. Therefore, two apartments with the same number of bedrooms could cost significantly different amounts.
  </p>

  <p>
    Buyers should evaluate the layout, room sizes, orientation, and total quoted price of each unit prior to making a decision. While a larger apartment may offer more flexibility, the price difference should be evaluated based on the buyer's current space needs and long-term affordability.
  </p>

  <h3 className="text-2xl font-bold">
    4 BHK Apartment Price at My Home Anandam
  </h3>

  <p>
    The proposed <strong>4 BHK apartments at My Home Anandam</strong> will have an approximate size of <strong>2,300–2,600 square feet</strong>. This type of large apartment could be beneficial for families that need more bedrooms, separate work areas or simply more living space. Buyers should take into account other costs such as maintenance fees, furnishings and the increased cost of operating a larger home when making their final decision.
  </p>

  <p>
    Ultimately, the buyer's decision should be based upon what is best for their household and within their overall budget for owning a home.
  </p>

  <h2 className="text-2xl font-bold">
    Factors That May Affect My Home Anandam Price
  </h2>

  <p>
    Several factors can influence the final quoted price of an apartment within a large residential development like <strong>My Home Anandam</strong>.
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Apartment size:</strong> Larger units generally involve a higher total purchase cost, although the rate per square foot may vary.
    </li>
    <li>
      <strong>Floor and view:</strong> Floor level, orientation and views may influence the price of individual units.
    </li>
    <li>
      <strong>Tower and location:</strong> The distance from retail areas, <IntLink href="/amenities">amenities</IntLink>, access points and other shared facilities may affect buyer preferences.
    </li>
    <li>
      <strong>Payment plan:</strong> The timing of instalments and booking conditions can influence cash-flow requirements.
    </li>
    <li>
      <strong>Additional charges:</strong> Parking, floor-rise charges, maintenance deposits, applicable taxes and other fees should be checked against the official quotation.
    </li>
  </ul>

  <p>
    The developer's final pricing policy will determine which of these factors affect individual apartments and by how much. Location also plays a part in long-term value: the project sits on the corridor between Whitefield and Hoskote. Read more about connectivity on the <IntLink href="/location"><strong>My Home Anandam location</strong></IntLink> page.
  </p>

  <h2 className="text-2xl font-bold">
    Additional Costs Beyond the My Home Anandam Price
  </h2>

  <p>
    The quoted base price of the apartment may not be the total amount that will be paid by a buyer. Prior to booking, ask for an itemised <strong>My Home Anandam cost sheet</strong> which lists all of the costs associated with purchasing the apartment.
  </p>

  <figure className="space-y-2 max-w-xl mx-auto">
    <Image
      src="/images/costing-details.webp"
      alt="My Home Anandam cost sheet and payment schedule preview"
      title="My Home Anandam Cost Sheet"
      width={320}
      height={174}
      className="w-full h-auto rounded-lg border border-gray-200"
    />
    <figcaption className="text-sm text-gray-500 text-center">
      Sample cost sheet layout – request the latest My Home Anandam cost sheet for actual figures
    </figcaption>
  </figure>

  <p>
    These costs can include: registration &amp; stamp duty (see the <ExtLink href="https://igr.karnataka.gov.in/">Karnataka Department of Stamps and Registration</ExtLink>); applicable <ExtLink href="https://www.gst.gov.in/">GST</ExtLink>; parking charges (if they are separate from the purchase price); maintenance deposit; clubhouse related charges (if applicable); and any other fees that have been disclosed. Each of these items will vary based upon the legal status of the project, the terms of the transaction, and the laws in effect at the time of the transaction.
  </p>

  <p>
    Buyers should also review the proposed payment schedule and understand the penalties for late payments, cancellations, and modifications to the contract. Comparing the complete cost sheets of different apartment configurations is a much better way to budget than comparing only the headline prices.
  </p>

  <h2 className="text-2xl font-bold">
    Is My Home Anandam Price Worth Evaluating for Your Budget?
  </h2>

  <p>
    The project's size, types of apartments offered, and its integration of both residential and retail uses will all be factors to consider; however, none of these alone can determine if an individual unit provides good value.
  </p>

  <p>
    To assess this, you need to have confirmed pricing, detailed plans, approvals and compare the unit to similar ones in the local market. Prior to committing financially, buyers should confirm the approved project details, applicable RERA registration, carpet area, possession timeline and payment terms. Since <strong>My Home Anandam</strong> is currently in the <strong>pre-launch phase</strong>, these details should be verified using official documentation once it becomes available.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

  <h3 className="text-xl font-bold">
    1. What is the current My Home Anandam price?
  </h3>

  <p>
    The official My Home Anandam price list has not been released yet, as the project is in the pre-launch stage. Buyers should obtain the latest price list and cost sheet directly from the developer.
  </p>

  <h3 className="text-xl font-bold">
    2. What is the size of a 2 BHK apartment at My Home Anandam?
  </h3>

  <p>
    The indicative size of a 2 BHK apartment at My Home Anandam is approximately 1,240–1,300 sq. ft.
  </p>

  <h3 className="text-xl font-bold">
    3. What is the size of a 3 BHK apartment at My Home Anandam?
  </h3>

  <p>
    The proposed 3 BHK apartments range from approximately 1,600 to 2,000 sq. ft.
  </p>

  <h3 className="text-xl font-bold">
    4. What is the size of a 4 BHK apartment at My Home Anandam?
  </h3>

  <p>
    The indicative size of a 4 BHK apartment is approximately 2,300–2,600 sq. ft.
  </p>

  <h3 className="text-xl font-bold">
    5. Are additional charges included in the My Home Anandam price?
  </h3>

  <p>
    This has not been confirmed. Buyers should request an itemised quotation showing the base price, applicable GST, stamp duty and registration charges, parking and other charges.
  </p>

  <h3 className="text-xl font-bold">
    6. Is My Home Anandam currently in the pre-launch phase?
  </h3>

  <p>
    Yes. My Home Anandam is in the pre-launch stage with launch updates expected in 2027. Buyers should verify the latest approvals and RERA registration details before booking.
  </p>
</div>
        </div>
      </main>
    </>
  );
}

export default PricePage;
