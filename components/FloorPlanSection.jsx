/* eslint-disable react/no-unescaped-entities */
import { IntLink } from "./SeoLinks";

import FloorPlanCards from "./FloorPlanCards";

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
        <FloorPlanCards />
      </div>
    </section>
  );
}