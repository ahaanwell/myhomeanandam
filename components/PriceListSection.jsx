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

        <div className="flex flex-col lg:flex-row gap-0 ">

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
            src="/images/costing-details.webp" alt="Costing Details" />
            <DownloadCostSheetActions/>
          </div>

        </div>
      </div>
    </section>
  );
}