/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import FloorPlanCards from "@/components/FloorPlanCards";
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
  ["Apartment Sizes", "1,240 – 2,600 sq. ft. (indicative)"],
  ["Project Status", "Pre Launch 2027"],
];

function FloorPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            My Home Anandam Floor Plan
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p>
    The <strong>My Home Anandam floor plan</strong> gives potential homebuyers a glimpse into what types of apartments will be built at the new residential community located along <strong>Whitefield–Hoskote Main Road</strong> in <strong>East Bengaluru</strong>. By looking over the <ExtLink href="https://en.wikipedia.org/wiki/Floor_plan">floor plan</ExtLink>, buyers can see how each size apartment might meet their family's needs.
  </p>

  <p>
    <IntLink href="/"><strong>My Home Anandam</strong></IntLink> by <strong>My Home Group</strong> has been designed as <strong>2, 3 &amp; 4 BHK apartments</strong> with indicative sizes ranging from approximately <strong>1,240 sq. ft. to 2,600 sq. ft.</strong> across all available configurations. Since the project is currently in the <strong>pre-launch phase</strong>, detailed apartment drawings, room dimensions and confirmed carpet areas should be checked via the official floor plans once they are made available.
  </p>

  <h2 className="text-2xl font-bold">
    My Home Anandam 2, 3 &amp; 4 BHK Floor Plans
  </h2>

  <p>
    View the indicative <strong>My Home Anandam 2 BHK, 3 BHK and 4 BHK floor plans</strong> below. Select any plan to download the detailed layout.
  </p>
</div>

          <div className="mt-6">
            <FloorPlanCards />
          </div>

          <div className="space-y-6 text-gray-800 mt-10">
  <h2 className="text-2xl font-bold">
    My Home Anandam Project Details at a Glance
  </h2>

  <p>
    The apartments are spread across <strong>27 towers</strong> on <strong>52.5 acres</strong>. To see where each tower sits within the community, explore the <IntLink href="/master-plan"><strong>My Home Anandam master plan</strong></IntLink>.
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
    My Home Anandam Floor Plan Overview
  </h2>

  <p>
    The proposed apartment layouts have been created based on various space needs; some being smaller family-type units while others are larger residential properties that include more than one bedroom.
  </p>

  <p>
    When selecting an appropriate layout for your new home, you will need to consider much more than just the amount of square feet in each unit. Other factors such as room proportions, circulation space, storage and how the living area relates to the private areas all play a role in providing daily comfort.
  </p>

  <p>
    The following table summarises the currently available indicative apartment sizes. For the latest cost of each configuration, see the <IntLink href="/price"><strong>My Home Anandam price</strong></IntLink> page.
  </p>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <caption className="sr-only">My Home Anandam apartment configurations and sizes</caption>
    <thead>
      <tr>
        <th scope="col" className="border border-gray-300 px-4 py-2">
          Configuration
        </th>
        <th scope="col" className="border border-gray-300 px-4 py-2">
          Indicative Apartment Size
        </th>
        <th scope="col" className="border border-gray-300 px-4 py-2">
          Suitable Considerations
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">2 BHK</td>
        <td className="border border-gray-300 px-4 py-2">1,240–1,300 sq. ft.</td>
        <td className="border border-gray-300 px-4 py-2">
          Compact household requirements
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">3 BHK</td>
        <td className="border border-gray-300 px-4 py-2">1,600–2,000 sq. ft.</td>
        <td className="border border-gray-300 px-4 py-2">
          Additional room and flexible space
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">4 BHK</td>
        <td className="border border-gray-300 px-4 py-2">2,300–2,600 sq. ft.</td>
        <td className="border border-gray-300 px-4 py-2">
          Larger households and multiple room requirements
        </td>
      </tr>
    </tbody>
  </table>

  <p>
    These sizes are indicative and should not be treated as confirmed carpet areas. The final floor plan and area statement will establish the precise measurements and the applicable area definitions for each apartment type.
  </p>

  <h2 className="text-2xl font-bold">
    My Home Anandam 2 BHK Floor Plan
  </h2>

  <p>
    The proposed <strong>2 BHK apartments at My Home Anandam</strong> are approximately <strong>1,240–1,300 sq. ft.</strong> in size.
  </p>

  <p>
    Therefore, this configuration may be appropriate for couples, small families and buyers who would like to have a home with two bedrooms and a manageable amount of space. Buyers looking at the <strong>2 BHK floor plan</strong> should consider how the living/dining area, kitchen, bedrooms and bathrooms relate to each other.
  </p>

  <p>
    A good layout will help you move around your home more easily; it will allow you to place furniture in the best possible way; and it will allow you to use all of the available space in your home. Buyers should also check where windows, balconies and storage areas are located. Buyers should determine if the layout allows them to accommodate their furniture needs and if the bedrooms provide enough privacy from the main living area.
  </p>

  <h2 className="text-2xl font-bold">
    My Home Anandam 3 BHK Floor Plan
  </h2>

  <p>
    The proposed <strong>3 BHK apartments at My Home Anandam</strong> will vary in size from approximately <strong>1,600 to 2,000 sq. ft.</strong> This variation in size indicates that there may be different layout options for the final apartment; however, the exact options must be verified by the official drawings.
  </p>

  <h3 className="text-2xl font-bold">
    Space Planning and Room Arrangement
  </h3>

  <p>
    A 3 BHK apartment offers more options to families that require an extra bedroom, a study area, or a room for out-of-town guests. The usefulness of this extra space is determined by both the size of each individual room and how well the layout links all areas of the home.
  </p>

  <p>
    Buyers will need to look at how large each bedroom is, where the bathrooms are located relative to each other, and how much living/dining area there is. They should also evaluate if the kitchen provides enough workspace and if they can easily move from one room to another.
  </p>

  <h3 className="text-2xl font-bold">
    Comparing Different 3 BHK Sizes
  </h3>

  <p>
    Efficiently using space is especially critical for smaller apartments in the proposed size range.
  </p>

  <p>
    While larger units have more options for flexibility, it is dependent upon how the additional space is allocated among each room. When choosing a unit, compare the actual floor plans as opposed to just looking at the "3 BHK" designation or total square footage. These final drawings will determine what layout is most appropriate for your household.
  </p>

  <h2 className="text-2xl font-bold">
    My Home Anandam 4 BHK Floor Plan
  </h2>

  <p>
    The proposed <strong>4 BHK apartments at My Home Anandam</strong> will have an approximate size of <strong>2,300 to 2,600 sq. ft.</strong> These larger apartments may meet the needs of families who need more bedrooms, separate work spaces, or more room for family activities.
  </p>

  <p>
    When evaluating the floor plan, you should look at how the bedrooms are positioned within the apartment and if there is a good balance between private and shared spaces. You should also consider where the bathrooms, storage areas, balconies, and utility spaces are located as they can all impact how well the apartment works. Larger apartments may also require more furniture, interior work, and ongoing maintenance expenses.
  </p>

  <p>
    Therefore, buyers should assess both the amount of usable space and the additional costs associated with owning a larger apartment before making a decision based solely on the size of the apartment.
  </p>

  <h2 className="text-2xl font-bold">
    Carpet Area and Super Built-Up Area Explained
  </h2>

  <p>
    Understanding the area measurements is essential when comparing the <strong>My Home Anandam floor plan</strong> options. Apartment brochures may display different area categories, and these figures are not interchangeable.
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Carpet area:</strong> The net usable floor area within the apartment, as defined under applicable regulations, excluding specified areas such as external walls and service shafts.
    </li>
    <li>
      <strong>Built-up area:</strong> Generally includes the carpet area and the area occupied by internal and external walls, subject to the stated measurement method.
    </li>
    <li>
      <strong>Super built-up area:</strong> Commonly includes the apartment's proportionate share of certain common areas, according to the applicable project calculation.
    </li>
  </ul>

  <p>
    The supplied apartment sizes should not automatically be interpreted as carpet area. Buyers should check the official area statement and compare carpet area alongside the quoted saleable or super built-up area before making a decision. Once registered, project details can be verified on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA</ExtLink> portal.
  </p>

  <h2 className="text-2xl font-bold">
    What to Check Before Choosing a Floor Plan
  </h2>

  <p>
    A practical review of the apartment drawings should cover the following points:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Room dimensions:</strong> Check whether bedrooms, living spaces and the kitchen meet your needs.
    </li>
    <li>
      <strong>Natural light and ventilation:</strong> Review window positions, apartment orientation and surrounding tower placement, keeping in mind the light and ventilation norms of the <ExtLink href="https://en.wikipedia.org/wiki/National_Building_Code_of_India">National Building Code of India</ExtLink>.
    </li>
    <li>
      <strong>Privacy:</strong> Examine bedroom access and the relationship between private and shared areas.
    </li>
    <li>
      <strong>Furniture planning:</strong> Consider beds, wardrobes, dining tables and other essential furniture.
    </li>
    <li>
      <strong>Utility and storage:</strong> Confirm the placement of utility areas, storage provisions and balconies.
    </li>
    <li>
      <strong>Official measurements:</strong> Verify carpet area, balcony areas and other measurements in the final documents.
    </li>
  </ul>

  <p>
    Beyond the apartment itself, consider the shared spaces and surroundings. Explore the <IntLink href="/amenities"><strong>My Home Anandam amenities</strong></IntLink> and the project's <IntLink href="/location"><strong>location on Whitefield–Hoskote Road</strong></IntLink>, which connects Whitefield with Hoskote.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

  <h3 className="text-xl font-bold">
    1. What apartment configurations are available in the My Home Anandam floor plan?
  </h3>

  <p>
    My Home Anandam offers 2, 3 & 4 BHK apartments, with indicative sizes ranging from approximately 1,240 sq. ft. to 2,600 sq. ft.
  </p>

  <h3 className="text-xl font-bold">
    2. What is the size of the My Home Anandam 2 BHK floor plan?
  </h3>

  <p>
    The proposed 2 BHK apartments at My Home Anandam are approximately 1,240–1,300 sq. ft.
  </p>

  <h3 className="text-xl font-bold">
    3. What is the size of the My Home Anandam 3 BHK floor plan?
  </h3>

  <p>
    The proposed 3 BHK apartments range from approximately 1,600 to 2,000 sq. ft.
  </p>

  <h3 className="text-xl font-bold">
    4. What is the size of the My Home Anandam 4 BHK floor plan?
  </h3>

  <p>
    The proposed 4 BHK apartments are approximately 2,300–2,600 sq. ft.
  </p>

  <h3 className="text-xl font-bold">
    5. Are the My Home Anandam floor plan sizes carpet area?
  </h3>

  <p>
    No. The sizes shared so far are indicative and should not be treated as confirmed carpet areas. Buyers should check the official area statement once it is released.
  </p>

  <h3 className="text-xl font-bold">
    6. How can I download the My Home Anandam floor plan?
  </h3>

  <p>
    You can request the My Home Anandam floor plan brochure using the Download option on this page. Official detailed drawings will be shared once the project launches.
  </p>
</div>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
