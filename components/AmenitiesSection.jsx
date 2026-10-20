/* eslint-disable react/no-unescaped-entities */
import AmenitiesGrid from "./AmenitiesGrid";
import { IntLink, ExtLink } from "./SeoLinks";

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

        <div className="w-full h-px bg-gray-200 mb-6" />

        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    <IntLink href="/amenities">Amenities</IntLink> are an important part of the proposed <strong>My Home Anandam</strong> development. The township is planned to combine residential towers with recreational facilities, fitness areas, landscaped spaces and community infrastructure.
  </p>

  <p>
    The project information refers to an extensive amenity offering, with listings mentioning <strong>more than 230 facilities</strong> and some preliminary descriptions referring to <strong>more than 250</strong>. The final number and list of amenities should be confirmed in the approved project documents and official brochure.
  </p>

  <p>
    For residents, the value of amenities depends on their quality, location, availability and maintenance. A well-designed community can provide opportunities for exercise, relaxation and social interaction without requiring residents to travel elsewhere for every activity.
  </p>
</div>

        <AmenitiesGrid />

        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Proposed Amenities at My Home Anandam</h3>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Amenity Category</th>
        <th className="border border-gray-300 px-4 py-2">Proposed Facilities</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Fitness</td>
        <td className="border border-gray-300 px-4 py-2">Gymnasium, fitness areas and exercise spaces</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Swimming</td>
        <td className="border border-gray-300 px-4 py-2">Swimming pool and children's pool</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Indoor Recreation</td>
        <td className="border border-gray-300 px-4 py-2">Indoor games and shared activity areas</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Outdoor Sports</td>
        <td className="border border-gray-300 px-4 py-2">Sports courts and outdoor recreation spaces</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Walking and Cycling</td>
        <td className="border border-gray-300 px-4 py-2">Jogging and cycling tracks</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Children's Facilities</td>
        <td className="border border-gray-300 px-4 py-2">Children's play areas and activity spaces</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Relaxation</td>
        <td className="border border-gray-300 px-4 py-2">Landscaped gardens, courtyards and quiet outdoor zones</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Community Activities</td>
        <td className="border border-gray-300 px-4 py-2">Multipurpose spaces and event areas</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Indoor Leisure</td>
        <td className="border border-gray-300 px-4 py-2">Clubhouse, <ExtLink href="https://en.wikipedia.org/wiki/Coworking">co-working</ExtLink> lounge and library</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Outdoor Gatherings</td>
        <td className="border border-gray-300 px-4 py-2">Amphitheatre or event lawn, subject to final specifications</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Nature-Focused Areas</td>
        <td className="border border-gray-300 px-4 py-2">Landscaped zones and water features, where included</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Safety and Security</td>
        <td className="border border-gray-300 px-4 py-2">Planned security systems and <ExtLink href="https://en.wikipedia.org/wiki/Closed-circuit_television">CCTV</ExtLink>, subject to final specifications</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </section>
  );
}
