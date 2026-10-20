/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Project Name", "My Home Anandam"],
  ["Developer", "My Home Group"],
  ["Location", "Whitefield–Hoskote Main Road, East Bengaluru"],
  ["Land Area", "52.5 Acres"],
  ["Towers", "27 Towers"],
  ["Clubhouse", "Approx. 110,000 sq. ft."],
  ["Amenities", "250+ Planned Amenities"],
  ["Configurations", "2, 3 & 4 BHK Apartments"],
  ["Project Status", "Pre Launch 2027"],
];

function AmenitiesPage() {

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Amenities"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            My Home Anandam Amenities
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p>
    The <strong>amenities at My Home Anandam</strong> have been designed to provide residents with opportunities for daily recreation, fitness and social interaction in a large residential community located on <strong>Whitefield–Hoskote Main Road</strong>, <strong>East Bengaluru</strong>. This development includes residential towers as well as landscaped areas, shared recreational facilities and a large clubhouse; therefore, how these amenities are distributed and accessed is an important factor for potential homebuyers. <IntLink href="/">My Home Anandam</IntLink> by <ExtLink href="https://www.myhomeconstructions.com/">My Home Group</ExtLink> is being developed on approximately <strong>52.5 acres</strong> and there are over <strong>250 amenities</strong> planned for the entire development.
  </p>

  <p>
    Although the total number of amenities reflects the intended size of the facilities, buyers should also take into account where each amenity is located, its usability, maintenance requirements and accessibility from each individual residential tower. The final amenity schedule and approved plans will determine what facilities will actually be provided.
  </p>

  <h2 className="text-2xl font-bold">
    Key Amenities at My Home Anandam
  </h2>

  <p>
    Here are some of the key <strong>My Home Anandam amenities</strong> planned for residents, covering fitness, leisure, safety and everyday convenience.
  </p>
</div>

          <div className="mt-6">
            <AmenitiesGrid />
          </div>

          <div className="space-y-6 text-gray-800 mt-10">
  <h2 className="text-2xl font-bold">
    My Home Anandam Project Details at a Glance
  </h2>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <caption className="sr-only">My Home Anandam project and amenity details</caption>
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
    My Home Anandam Amenities Overview
  </h2>

  <p>
    The proposed amenities are part of a larger residential development designed to meet the various needs of each family. Depending on the final amenity list provided by the developer, these amenities may provide space for exercise, relaxation, outdoor activities and social gatherings.
  </p>

  <p>
    Due to the large scale of this development, it will be necessary to properly organise all common facilities so that residents can easily access them without having to travel through vehicle-access areas.
  </p>

  <p>
    Therefore, the <strong>pedestrian-oriented podium planning</strong> of this project is relevant when assessing the relationship between residential buildings and common spaces. Since My Home Anandam is still in the <strong>pre-launch phase</strong>, the actual names, specifications and locations of each amenity should be verified through official project documentation rather than based upon preliminary descriptions.
  </p>

  <h2 className="text-2xl font-bold">
    Clubhouse at My Home Anandam
  </h2>

  <p>
    The proposed <ExtLink href="https://en.wikipedia.org/wiki/Clubhouse">clubhouse</ExtLink> is about <strong>110,000 sq. ft.</strong> and is designed to provide an indoor shared space for all residents.
  </p>

  <p>
    Although the specific amenities provided by the clubhouse may vary based upon the final approved design, a clubhouse of this size can be used for many different types of community activities.
  </p>

  <h3 className="text-2xl font-bold">
    Indoor Recreation and Community Spaces
  </h3>

  <p>
    Indoor amenities will allow for leisure and social interaction all year long. The types of amenities available at each facility will depend on the final list of amenities. Examples of what could be included are multi-purpose rooms, indoor recreation facilities and spaces for community gatherings.
  </p>

  <p>
    Prior to purchasing a home, buyers should verify which amenities are included, if they need to reserve them ahead of time, and if there are additional costs associated with using specific amenities. This will determine how easily accessible the clubhouse will be for daily use.
  </p>

  <h3 className="text-2xl font-bold">
    Fitness and Wellness Facilities
  </h3>

  <p>
    Another area that buyers will want to look at once the final amenity list is released is <strong>fitness facilities</strong>. When the final plan is complete, it should indicate if there are any exercise rooms, indoor activities or other types of wellness facilities included in the development.
  </p>

  <p>
    The usefulness of these facilities will depend upon what type of equipment is provided, how many hours they operate each day, how well they are maintained and their capacity.
  </p>

  <p>
    Therefore, buyers should base their decisions on the actual specifications of the facility as opposed to solely looking at the size of the clubhouse.
  </p>

  <h2 className="text-2xl font-bold">
    Outdoor Amenities and Landscaped Spaces
  </h2>

  <p>
    Landscaping can affect how residents use the outdoor areas of a residential community. If there are walking paths, gardens, seating areas and recreation zones within the final design, they may offer opportunities for residents to engage in outdoor activities and socialise informally.
  </p>

  <figure className="space-y-2">
    <Image
      src="/images/banners/my-home-anandam.webp"
      alt="My Home Anandam amenities – aerial view of the clubhouse, swimming pool and landscaped grounds"
      title="My Home Anandam Amenities"
      width={1200}
      height={720}
      sizes="(max-width: 1024px) 100vw, 1024px"
      className="w-full h-auto rounded-lg"
    />
    <figcaption className="text-sm text-gray-500 text-center">
      Artistic impression of the clubhouse, pool and landscaped spaces at My Home Anandam
    </figcaption>
  </figure>

  <p>
    Families should consider where children's play areas and other shared facilities are located when reviewing the <IntLink href="/master-plan">My Home Anandam master plan</IntLink>. Buyers should look at the master plan to determine the distance between each residential tower, the amenity zone and the pedestrian route.
  </p>

  <p>
    Overall usability of outdoor facilities is determined by more than just the number of facilities; it is also affected by shade, seating, accessibility and separation from vehicular traffic. The final landscape design will define how the various spaces are organised throughout the site.
  </p>

  <h2 className="text-2xl font-bold">
    Family-Friendly Amenities at My Home Anandam
  </h2>

  <p>
    Shared amenities can serve different age groups, so their location and design are important considerations for households with children, older residents or multiple generations living together.
  </p>

  <h3 className="text-2xl font-bold">
    Children's Recreation Areas
  </h3>

  <p>
    The availability of dedicated <ExtLink href="https://en.wikipedia.org/wiki/Playground">children's play areas</ExtLink> (if they are part of the approved amenity list) should be assessed based on their accessibility, visibility and distance from vehicular traffic. The close proximity to residential units may affect how often families utilise these areas.
  </p>

  <p>
    Buyers should also review the type of equipment that will be provided, safety measures and supervision requirements (where applicable) as well as other relevant information. This type of information is much more helpful in determining whether or not a development is suitable for children than simply counting the number of amenities.
  </p>

  <h3 className="text-2xl font-bold">
    Spaces for Social Interaction
  </h3>

  <p>
    Community gathering areas are places where people meet informally, celebrate and participate in events together. Buyers should check whether multi-purpose spaces or designated gathering areas are included in the final plans and whether they meet their needs. It is also important to consider how many community gathering areas there are throughout the entire development. Having enough convenient locations will allow residents to use them regularly and minimise the time spent travelling around the residential campus.
  </p>

  <h2 className="text-2xl font-bold">
    Pedestrian-Friendly Planning and Amenity Access
  </h2>

  <p>
    One of the main features of My Home Anandam's proposed design is that <strong>vehicles will not be allowed on the podium levels</strong>. It is hoped that this will allow for a better pedestrian experience in those areas. How well this works will be determined by the final circulation plan, which includes walking paths, service access and emergency vehicle access. Buyers should ask how residents will get from one tower to another and how they will access the landscaped areas, the clubhouse and all other shared spaces.
  </p>

  <p>
    In addition to being able to walk around, it is important for older residents and those with limited mobility to have easy access to the various amenities, in line with the principles of the <ExtLink href="https://en.wikipedia.org/wiki/Rights_of_Persons_with_Disabilities_Act,_2016">Rights of Persons with Disabilities Act, 2016</ExtLink>.
  </p>

  <p>
    Therefore, the approved plans should clearly define pedestrian connections, ramps, lifts and any other types of access that may be needed.
  </p>

  <h2 className="text-2xl font-bold">
    Integrated Retail and Everyday Convenience
  </h2>

  <p>
    <strong>Retail facilities</strong> will be located near the entrance to this development. These facilities may provide easy access to certain types of daily service needs based upon what type of business opens up in these facilities.
  </p>

  <p>
    However, the availability of retail should be evaluated separately from residential amenities. Buyers should look at the distance between their home and the nearest retail area, how they will get to that retail area, and how visitors are managed. Additionally, the final design should clearly show how commercial activities are separated from residential circulation so that buyers can understand possible issues related to traffic, noise and privacy. Learn more about the surroundings on the <IntLink href="/location">My Home Anandam location</IntLink> page.
  </p>

  <h2 className="text-2xl font-bold">
    What to Check Before Evaluating My Home Anandam Amenities
  </h2>

  <p>
    Before making a decision, prospective buyers should review the latest official amenity schedule and master plan. The following points can help assess the practical value of the proposed facilities:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Confirmed facilities:</strong> Verify which amenities are included in the approved project plans.
    </li>
    <li>
      <strong>Location and access:</strong> Check the distance from the chosen tower to the clubhouse and outdoor spaces.
    </li>
    <li>
      <strong>Capacity:</strong> Review whether shared facilities are appropriately sized for the expected residential population.
    </li>
    <li>
      <strong>Operating conditions:</strong> Ask about opening hours, booking rules and any user charges.
    </li>
    <li>
      <strong>Maintenance:</strong> Understand recurring maintenance costs and responsibility for common facilities.
    </li>
    <li>
      <strong>Approval status:</strong> Confirm applicable RERA registration and approved project documentation.
    </li>
  </ul>

  <p>
    Amenities are only one part of the decision. Compare the <IntLink href="/floor-plan">My Home Anandam floor plans</IntLink> and the latest <IntLink href="/price">My Home Anandam price</IntLink> to see which <strong>2, 3 &amp; 4 BHK apartment</strong> best fits your needs.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

  <h3 className="text-xl font-bold">
    1. How many amenities are planned at My Home Anandam?
  </h3>

  <p>
    More than 250 amenities are planned across the 52.5-acre My Home Anandam development on Whitefield–Hoskote Main Road, East Bengaluru.
  </p>

  <h3 className="text-xl font-bold">
    2. How big is the clubhouse at My Home Anandam?
  </h3>

  <p>
    The proposed clubhouse at My Home Anandam is approximately 110,000 sq. ft., designed as a shared indoor space for all residents.
  </p>

  <h3 className="text-xl font-bold">
    3. What are the key amenities at My Home Anandam?
  </h3>

  <p>
    Planned amenities include a gymnasium, swimming pool, yoga pavilion, kids' activity zone, mini theatre, indoor games room, jogging track, tennis court, amphitheatre and EV charging points, subject to the final approved amenity list.
  </p>

  <h3 className="text-xl font-bold">
    4. Is My Home Anandam pedestrian-friendly?
  </h3>

  <p>
    Yes. The proposed design restricts vehicle movement on the podium level to create a better pedestrian experience between towers, landscaped areas and shared amenities.
  </p>

  <h3 className="text-xl font-bold">
    5. Will there be retail shops at My Home Anandam?
  </h3>

  <p>
    Yes. Retail facilities are planned near the entrance of the development, separate from the residential amenity areas.
  </p>

  <h3 className="text-xl font-bold">
    6. Is the My Home Anandam amenity list final?
  </h3>

  <p>
    No. My Home Anandam is in the pre-launch phase, so buyers should verify the final amenity schedule, approved plans and RERA registration before booking.
  </p>
</div>
        </div>
      </main>
    </>
  );
}

export default AmenitiesPage;
