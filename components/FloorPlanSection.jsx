/* eslint-disable react/no-unescaped-entities */
import { IntLink } from "./SeoLinks";

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/floorplans/2bhk-floorplan.webp",
    alt: "2 BHK Floor Plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/floorplans/3bhk-floorplan.webp",
    alt: "3BHK Floor Plan",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/floorplans/4bhk-floorplan.webp",
    alt: "4 BHK Floor Plan",
  },
];

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="My Home Anandam floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
            >
              <div className="relative w-full aspect-9/5 overflow-hidden bg-white">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />

                <FloorPlanClient plan={plan} />
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}