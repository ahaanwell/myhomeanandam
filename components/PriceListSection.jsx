/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import EMICalculator from "./Emicalculator";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "2 BHK",        size: "1,240– 1,300 sq. ft.",    price: "₹ On Request" },
  { type: "3 BHK",        size: "1,600 – 2,000 sq. ft.",  price: "₹ On Request" },
  { type: "4 BHK",  size: "2,300 – 2,600 sq. ft.",  price: "₹ On Request" },
];

export default function PriceListSection() {

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Configuration and Price
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="space-y-6 text-gray-800">
  <p>
    People looking for <strong>luxurious flats in East Bangalore</strong> should consider <IntLink href="/price">My Home Anandam&#39;s pricing</IntLink>.
    The project will have <strong>2, 3, and 4 BHK homes</strong>. Prices will depend on apartment size, location in the
    tower, floor level, view, and the payment plan chosen.
  </p>

  <p>
    Since the project, <strong>My Home Codename Anandam</strong>, is still in its early stages, buyers should
    distinguish between estimated prices on real estate websites and prices confirmed by the
    producer. Listing prices don&#39;t follow a regular pattern. Because of this, use the numbers below only
    as rough suggestions, not as a firm offer.
  </p>
</div>

        <div className="flex flex-col lg:flex-row gap-0 mt-6">

<div className="flex-1 overflow-x-auto">
  <table
    className="w-full text-sm md:text-base"
    role="table"
    aria-label="Apartment types and pricing"
  >
    <thead>
      <tr className="border bg-primary text-white border-gray-200">
        <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
      </tr>
    </thead>
    <tbody>
      {priceData.map((row, i) => (
        <tr
          key={i}
          className="border-b border-gray-300 hover:bg-gray-50 transition"
        >
          <td className="py-2 px-2 text-center text-black">{row.type}</td>
          <td className="py-2 px-2 text-center text-black">{row.size}</td>
          <td className="py-2 px-2 text-center font-medium text-primary">
            {row.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
          <div className="px-4 md:px-0">
            <img 
            className="w-full"
            loading="lazy"
            src="/images/costing-details.webp" alt="My Home Anandam cost sheet and price details" width={320} height={174} />
            <DownloadCostSheetActions/>
          </div>

        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Additional Charges to Include in the Budget</h2>

  <p>
    The starting price is only one part of the total cost. Before paying a booking deposit, buyers should ask for a full cost sheet listing all applicable fees.
  </p>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Cost Component</th>
        <th className="border border-gray-300 px-4 py-2">What Buyers Should Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Base Apartment Price</td>
        <td className="border border-gray-300 px-4 py-2">Price of the selected unit and the area used for calculation</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Preferential Location Charges</td>
        <td className="border border-gray-300 px-4 py-2">Additional charges for specific floors, views or locations, if applicable</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Parking Charges</td>
        <td className="border border-gray-300 px-4 py-2">Number of parking spaces included and any additional cost</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Clubhouse or Amenity Charges</td>
        <td className="border border-gray-300 px-4 py-2">Whether any separate charge applies</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Maintenance Deposit</td>
        <td className="border border-gray-300 px-4 py-2">Advance maintenance payments and the period covered</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Infrastructure Charges</td>
        <td className="border border-gray-300 px-4 py-2">Charges for common facilities or development work, if applicable</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2"><ExtLink href="https://cbic-gst.gov.in/">GST</ExtLink></td>
        <td className="border border-gray-300 px-4 py-2">Applicability based on the project's legal and construction status</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Stamp Duty</td>
        <td className="border border-gray-300 px-4 py-2">Applicable charges under Karnataka rules</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2"><ExtLink href="https://kaveri.karnataka.gov.in/">Registration Fee</ExtLink></td>
        <td className="border border-gray-300 px-4 py-2">Government registration charges</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Other Deposits</td>
        <td className="border border-gray-300 px-4 py-2">Utility, corpus or other applicable payments</td>
      </tr>
    </tbody>
  </table>

  <h2 className="text-2xl font-bold">Cost Sheet, Payment Plan and Offers</h2>

  <p>
    A <strong>My Home Anandam cost sheet</strong> should list the apartment's base price, any extra fees or taxes, and the total amount due. Ask for a cost sheet linked to the exact unit, rather than guessing at the price.
  </p>

  <p>
    The payment plan is also very important. It should spell out when payments are due, which construction or contract milestones trigger payments, and how the deposit works with the total price of the house. Any special offer should be written down, along with the conditions and time frame for which it is valid.
  </p>

  <p>
    People buying shouldn't base their decisions on verbal promises of discounts or future value growth. A written offer makes the real price and deal terms easier to understand.
  </p>

  <p>
    <strong>Before you book, you should pay attention to the following:</strong>
  </p>

  <ol className="list-decimal space-y-2 pl-6">
    <li>Check what the <IntLink href="/floor-plan">carpet area and super built-up area</IntLink> of the apartment are.</li>
    <li>Get the most up-to-date list of prices broken down by unit.</li>
    <li>Look at the booking fee and the rules for cancelling.</li>
    <li>Know when the payments are due and what the late payment fees are.</li>
    <li>Make sure that GST and other required fees are included.</li>
    <li>Ask for specifics about the ownership plan and any rules that apply to delays.</li>
    <li>Check to see if the project is registered with RERA before you buy it.</li>
  </ol>
</div>
      </div>
    </section>
  );
}