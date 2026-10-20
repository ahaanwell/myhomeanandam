import AmenitiesGrid from "./AmenitiesGrid";

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities at My Home Anandam
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <AmenitiesGrid />
      </div>
    </section>
  );
}
