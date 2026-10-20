/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import LocationMap from "./LocationMap";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white py-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location of My Home Anandam
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <LocationMap />
      </div>
    </section>
  );
}
