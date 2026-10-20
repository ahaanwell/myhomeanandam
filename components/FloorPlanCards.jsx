import FloorPlanClient from "./FloorPlanClient";

export const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "/images/floorplans/2bhk-floorplan.webp",
    alt: "My Home Anandam 2 BHK floor plan – 1,240 to 1,300 sq. ft.",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "/images/floorplans/3bhk-floorplan.webp",
    alt: "My Home Anandam 3 BHK floor plan – 1,600 to 2,000 sq. ft.",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "/images/floorplans/4bhk-floorplan.webp",
    alt: "My Home Anandam 4 BHK floor plan – 2,300 to 2,600 sq. ft.",
  },
];

export default function FloorPlanCards() {
  return (
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
              title={`My Home Anandam ${plan.label}`}
              width={720}
              height={400}
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
  );
}
