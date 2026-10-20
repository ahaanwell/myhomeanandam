/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import DownloadActions from "@/components/DownloadActions";
import MasterPlanCard from "@/components/MasterPlanCard";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Project Name", "My Home Anandam"],
  ["Developer", "My Home Group"],
  ["Location", "Whitefield–Hoskote Road, East Bengaluru"],
  ["Land Area", "52.5 Acres"],
  ["Towers", "27 Towers"],
  ["Total Units", "5200+ Units"],
  ["Clubhouse", "Approx. 110,000 sq. ft."],
  ["Amenities", "250+ Planned Amenities"],
  ["Configurations", "2, 3 & 4 BHK Apartments"],
  ["Project Status", "Pre Launch 2027"],
];

function MasterPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Master Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            My Home Anandam Master Plan
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p>
    The <strong>My Home Anandam master plan</strong> is an outline of the proposed arrangement of residential towers, landscaped areas, shared amenities and retail space for a large residential development located on <strong>Whitefield–Hoskote Main Road</strong> in <strong>East Bengaluru</strong>. A prospective home buyer can use the <ExtLink href="https://en.wikipedia.org/wiki/Master_plan">master plan</ExtLink> to understand how the project is organised and how each space will be used in relation to other spaces. <IntLink href="/">My Home Anandam</IntLink> by <ExtLink href="https://www.myhomeconstructions.com/">My Home Group</ExtLink> is being developed on approximately <strong>52.5 acres</strong> and will include <strong>27 residential towers</strong> and more than <strong>5,200 residential units</strong>.
  </p>

  <p>
    In addition to the residential units, the development is also planning to include a large clubhouse, extensive amenity area, entrance-level retail and a <ExtLink href="https://en.wikipedia.org/wiki/Podium">podium</ExtLink> that is designed to limit vehicle movement. Once the final approved plan is available, it will provide the detail necessary to confirm the exact organisation and distribution of all of these facilities.
  </p>
</div>

          <div className="mt-6">
            <MasterPlanCard />
          </div>

          <div className="space-y-6 text-gray-800 mt-10">
  <h2 className="text-2xl font-bold">
    My Home Anandam Project Details at a Glance
  </h2>

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
    My Home Anandam Master Plan Overview
  </h2>

  <p>
    The purpose of the <strong>My Home Anandam master plan</strong> is to create an organised community of residential units and public spaces in one location. At this level, how the towers are placed, how the residents move about internally, where the green space will be located and what types of public spaces exist can all affect the convenience, privacy and availability of amenities for each resident.
  </p>

  <p>
    Due to the combination of high-rise residential buildings and recreational/retail spaces near the entrance, it is important to evaluate the relationship between residential areas and public spaces as opposed to evaluating the project based on its total land area.
  </p>

  <p>
    The final location of each tower, amenity area, entrance/exit point and landscaping will be determined by the most current official master plan, as the project is still in the <strong>pre-launch phase</strong>.
  </p>

  <h2 className="text-2xl font-bold">
    My Home Anandam Master Plan Layout and Tower Arrangement
  </h2>

  <p>
    The development is comprised of <strong>27 residential towers</strong>. Each tower will have varying heights; some will be as low as three basements plus a ground floor, while others could reach up to <strong>38–48 floors</strong>. The height of each tower will depend on how many floors are built. How the towers are positioned on-site will greatly impact the quality of the residential experience.
  </p>

  <figure className="space-y-2">
    <Image
      src="/images/banners/my-homeanandam.webp"
      alt="My Home Anandam aerial view of high-rise residential towers and landscaped grounds on Whitefield–Hoskote Road"
      title="My Home Anandam Towers"
      width={1200}
      height={720}
      sizes="(max-width: 1024px) 100vw, 1024px"
      className="w-full h-auto rounded-lg"
    />
    <figcaption className="text-sm text-gray-500 text-center">
      Artistic impression of the My Home Anandam towers, Whitefield–Hoskote Road, East Bengaluru
    </figcaption>
  </figure>

  <p>
    Factors such as tower-to-tower distance, building orientation and the location of shared amenities (such as parks) will all play a role in providing daylight, ventilation, views and privacy between neighbouring units.
  </p>

  <h3 className="text-2xl font-bold">
    Residential Tower Placement
  </h3>

  <p>
    To evaluate the potential layout of the residential towers, buyers should review the distance between buildings, the position of entrances and the relationship between the residential buildings and common amenities. Additionally, buyers can assess if the proposed layout allows easy access to walking paths and recreational areas.
  </p>

  <p>
    It is recommended that buyers read both the master plan and the individual floor plans together. The master plan provides an overview of the entire site layout, whereas the <IntLink href="/floor-plan">My Home Anandam floor plans</IntLink> provide detailed information regarding the layout and size of each <strong>2, 3 &amp; 4 BHK apartment</strong>.
  </p>

  <h3 className="text-2xl font-bold">
    Internal Circulation and Access
  </h3>

  <p>
    In order for residents, guests, service providers and emergency vehicles to move efficiently throughout a large residential community, it is essential to establish clear access routes. Therefore, the master plan must clearly define the primary entrance/exit points, internal roadways, pedestrian links and service access points.
  </p>

  <p>
    A key planning element of this project is the <strong>restriction of vehicle movements on the podium level</strong>. The success of this restriction will be dependent upon the final circulation design, the separation of pedestrian and vehicular routes, and the provision of emergency and maintenance access.
  </p>

  <h2 className="text-2xl font-bold">
    Landscaped Areas and Open Spaces in My Home Anandam
  </h2>

  <p>
    <ExtLink href="https://en.wikipedia.org/wiki/Landscape_architecture">Landscaped areas</ExtLink> enhance the functionality of a residential development as they provide space for walking, relaxing and participating in outdoor activities. The use of landscaped areas is determined by their size and location, as well as the proximity of each landscaped area to the residential towers.
  </p>

  <p>
    Buyers of <strong>My Home Anandam</strong> should review the final design to see how the landscaped zones relate to the clubhouse, amenity areas and residential blocks. Placement of seating areas, walking paths and recreational spaces will determine if the various facilities are easily accessible to all age groups.
  </p>

  <p>
    It would be beneficial to review the differences between landscaped areas, recreational facilities, circulation spaces and other open areas. The approved drawings and project documentation should provide clear information regarding the actual distribution of these spaces.
  </p>

  <h2 className="text-2xl font-bold">
    Clubhouse and Amenities in the Master Plan
  </h2>

  <p>
    The proposed development will include a <strong>clubhouse of approximately 110,000 sq. ft.</strong> and more than <strong>250 planned amenities</strong> throughout the community. Explore the full list on the <IntLink href="/amenities">My Home Anandam amenities</IntLink> page.
  </p>

  <p>
    In addition to explaining how the various amenities will be distributed, the master plan must also describe how residents will have access to each amenity from their respective residential tower.
  </p>

  <p>
    While the total number of amenities is an important factor in evaluating a development, it does not necessarily represent the practical use of those amenities. Buyers should consider where activity zones are located, how close they are to homes, and if there is adequate separation between quiet areas and facilities that may generate high levels of activity.
  </p>

  <p>
    Additionally, buyers should evaluate the pedestrian connectivity, accessibility and availability of usable outdoor space around each of the shared facilities in order to gain an understanding of how the planned community may operate on a typical weekday versus busier times.
  </p>

  <h2 className="text-2xl font-bold">
    Retail and Integrated Development Planning
  </h2>

  <p>
    The <strong>retail facilities at My Home Anandam</strong> will be located near the entrance to the development; this will create a clear separation between the residential area and the commercial-facing portion of the development.
  </p>

  <p>
    Depending upon the type of business(es) that ultimately open in this area, it could offer easy access to some of your daily needs. It is recommended that buyers review the approved project documentation to determine the exact location, access arrangements, operating conditions and relationship with residential entrances for the proposed commercial/office component of the development. Traffic flow and noise levels can be affected by the location of retail activity, loading areas, parking and service access.
  </p>

  <p>
    Therefore, it is especially important to evaluate these factors when considering purchasing an apartment located near the entrance to the development or near a commercial zone.
  </p>

  <h2 className="text-2xl font-bold">
    Location Connectivity and Site Access
  </h2>

  <p>
    <strong>My Home Anandam</strong> is being developed along <strong>Whitefield–Hoskote Main Road</strong> in East Bengaluru, linking Whitefield with Hoskote. This road connects to SH-35, Kondasapura Road and BDA Road. These roads form the larger road network that provides a context for how users will access the development. Learn more on the <IntLink href="/location">My Home Anandam location</IntLink> page.
  </p>

  <p>
    The master plan should be reviewed to determine where the site entrance is located, as well as the internal approach roads and vehicle entry/exit arrangements. Access to the site will be determined by the final access design and current traffic conditions.
  </p>

  <h2 className="text-2xl font-bold">
    What to Check in the Official My Home Anandam Master Plan
  </h2>

  <p>
    Before making a property decision, prospective buyers should verify the following details against the latest available drawings:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Tower layout:</strong> Building locations, spacing, orientation and floor counts.
    </li>
    <li>
      <strong>Open spaces:</strong> The distribution of landscaped areas and recreation zones.
    </li>
    <li>
      <strong>Movement routes:</strong> Entry and exit points, internal roads and pedestrian paths.
    </li>
    <li>
      <strong>Amenities:</strong> The location of the clubhouse and shared facilities.
    </li>
    <li>
      <strong>Retail access:</strong> The separation between residential circulation and commercial activity.
    </li>
    <li>
      <strong>Approvals:</strong> The sanctioned plan, applicable RERA registration and other required project approvals.
    </li>
  </ul>

  <p>
    Since <strong>My Home Anandam</strong> is currently in the <strong>pre-launch phase</strong>, the final approved layout may contain details that differ from preliminary information. Buyers should rely on the latest official documents when evaluating the development. For indicative costs, see the <IntLink href="/price">My Home Anandam price</IntLink> page.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

  <h3 className="text-xl font-bold">
    1. What is the total land area of My Home Anandam?
  </h3>

  <p>
    As per the My Home Anandam master plan, the project is being developed on approximately 52.5 acres on Whitefield–Hoskote Main Road in East Bengaluru.
  </p>

  <h3 className="text-xl font-bold">
    2. How many towers are there in the My Home Anandam master plan?
  </h3>

  <p>
    The My Home Anandam master plan includes 27 residential towers with more than 5,200 residential units.
  </p>

  <h3 className="text-xl font-bold">
    3. How big is the clubhouse at My Home Anandam?
  </h3>

  <p>
    The proposed development includes a clubhouse of approximately 110,000 sq. ft. and more than 250 planned amenities across the community.
  </p>

  <h3 className="text-xl font-bold">
    4. Does the My Home Anandam master plan include retail spaces?
  </h3>

  <p>
    Yes. Retail facilities are planned near the entrance of the development, separating the commercial-facing area from the residential zone.
  </p>

  <h3 className="text-xl font-bold">
    5. Is the My Home Anandam master plan final?
  </h3>

  <p>
    No. My Home Anandam is in the pre-launch phase, so the final approved master plan may differ from preliminary information. Buyers should rely on the latest official documents and RERA registration.
  </p>

  <h3 className="text-xl font-bold">
    6. How can I download the My Home Anandam master plan?
  </h3>

  <p>
    You can request the My Home Anandam master plan using the Download option on this page. The official approved layout will be shared once the project launches.
  </p>
</div>
        </div>
      </main>
    </>
  );
}

export default MasterPlanPage;
