/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import DownloadActions from "@/components/DownloadActions";
import LocationMap from "@/components/LocationMap";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projectDetails = [
  ["Project Name", "My Home Anandam"],
  ["Developer", "My Home Group"],
  ["Location", "Whitefield–Hoskote Main Road, East Bengaluru"],
  ["Connecting Roads", "SH-35, Kondasapura Road, BDA Road"],
  ["Nearby Hubs", "Whitefield, Hoskote"],
  ["Land Area", "52.5 Acres"],
  ["Towers", "27 Towers"],
  ["Configurations", "2, 3 & 4 BHK Apartments"],
  ["Project Status", "Pre Launch 2027"],
];

function LocationPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            My Home Anandam Location
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p>
    The <strong>My Home Anandam location</strong> on the <strong>Whitefield–Hoskote Main Road</strong> will be a major factor in determining how successful this new residential community is in <strong>East <ExtLink href="https://en.wikipedia.org/wiki/Bangalore">Bengaluru</ExtLink></strong>, an area that has been growing rapidly due to the expansion of residential communities, employment centres and road infrastructure. Prospective homebuyers should consider the location for its connectivity to <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore">Whitefield</ExtLink>, <ExtLink href="https://en.wikipedia.org/wiki/Hoskote">Hoskote</ExtLink> and other surrounding areas, as well as its ability to meet their daily needs. The project is being developed along a corridor that is connected to <strong>SH-35</strong>, <strong>Kondasapura Road</strong> and <strong>BDA Road</strong>. These three roads will serve as the basis for assessing daily commute times, access to essential services and future residential demand.
  </p>

  <p>
    However, the true convenience of the location will be determined by traffic levels, public transportation options and the development of additional infrastructure in the area.
  </p>
</div>

          <div className="mt-6">
            <LocationMap />
          </div>

          <div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">
    My Home Anandam Project Details at a Glance
  </h2>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <caption className="sr-only">My Home Anandam location and project details</caption>
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
    My Home Anandam Location Overview
  </h2>

  <p>
    <IntLink href="/"><strong>My Home Anandam</strong></IntLink> by <strong>My Home Group</strong> will be located along the <strong>Whitefield–Hoskote Main Road</strong> in East Bengaluru. This large-scale corridor links many of the existing residential and commercial developments with those that are currently being developed, which gives potential buyers numerous options to evaluate as they determine if this is the right place for them. Whitefield is a well-established area for both employment and residential purposes.
  </p>

  <p>
    On the other hand, Hoskote is a growing area in the eastern part of Bengaluru. Therefore, the location may be appealing to professionals, families and investors who wish to purchase property outside of the more central urban areas. However, a general regional location does not indicate how long it will take to get to each individual location. Buyers should look at the project's specific entrance, nearby intersections and available transportation methods prior to making a decision as to whether or not the location meets their day-to-day needs.
  </p>

  <figure className="space-y-2">
    <Image
      src="/images/banners/myhomeanandam.webp"
      alt="My Home Anandam towers on Whitefield–Hoskote Main Road, East Bengaluru"
      title="My Home Anandam Location"
      width={1044}
      height={626}
      sizes="(max-width: 1024px) 100vw, 1024px"
      className="w-full h-auto rounded-lg"
    />
    <figcaption className="text-sm text-gray-500 text-center">
      Artistic impression of My Home Anandam along the Whitefield–Hoskote corridor
    </figcaption>
  </figure>

  <h2 className="text-2xl font-bold">
    Road Connectivity from My Home Anandam Location
  </h2>

  <p>
    Road connectivity is an important part of evaluating this development because commuting convenience can influence both residential comfort and tenant demand.
  </p>

  <h3 className="text-2xl font-bold">
    Whitefield–Hoskote Main Road and SH-35
  </h3>

  <p>
    <strong>Whitefield–Hoskote Main Road</strong> is the main point of reference for <strong>My Home Anandam</strong>. This road connects with <strong>SH-35</strong>, which provides a link to other areas such as Whitefield, Hoskote and other nearby neighbourhoods. Residents who work in East Bengaluru may find this road network to be an easy way to get to many different places of employment and residence.
  </p>

  <p>
    However, the time it takes to travel on this road network will depend on where you are going, how much traffic there is at that time and what kind of roads you are using to connect.
  </p>

  <h3 className="text-2xl font-bold">
    Kondasapura Road and BDA Road
  </h3>

  <p>
    <strong>Kondasapura Road</strong> and <strong>BDA Road</strong> have also been listed as possible travel routes for this project; however, how useful they may be is dependent upon your direction of travel and the ease of access to local junctions. When considering which route you would prefer to take, it is important to determine if that route requires navigating through busy intersections, taking long detours or frequently changing directions. A test drive of the commute during weekday morning and evening peak hours can give you a much better idea of what to expect than simply looking at estimated distances.
  </p>

  <h2 className="text-2xl font-bold">
    Connectivity to Whitefield and Employment Centres
  </h2>

  <p>
    <strong>Whitefield</strong> is a well-established commercial and employment hub in East Bengaluru. It has many businesses, offices, commercial establishments and residential communities. Therefore, it is a good reference point when considering buying a home along the <strong>Whitefield–Hoskote corridor</strong>. Whether or not there will be a commute advantage depends on where your work is located.
  </p>

  <p>
    For example, a home here may be very convenient for someone who works in eastern Bengaluru; however, it may be less convenient for someone who commutes daily to central, northern or western parts of the city. Buyers should evaluate door-to-door travel time, fuel/transportation costs and available alternative routes. These factors will likely have a much larger impact on daily convenience than the physical distance between two points on a map.
  </p>

  <h2 className="text-2xl font-bold">
    Public Transport and Metro Connectivity
  </h2>

  <p>
    Public transportation options should be evaluated separately from how well connected the development is by roads. Prior to purchasing an apartment, buyers should determine the location of the closest operational <ExtLink href="https://en.wikipedia.org/wiki/Namma_Metro">Namma Metro</ExtLink> station, <ExtLink href="https://mybmtc.karnataka.gov.in/">BMTC</ExtLink> bus stop(s) and available feeder service(s) that are applicable to the development. It is particularly important to consider the distance from the development's entrance to a station.
  </p>

  <p>
    While a station may be relatively close to the development, it may still require a vehicle or feeder service to reach the station if the walking path to the station is not convenient or suitable for everyday use. All proposed transportation infrastructure should be evaluated based on whether it has been approved and what its anticipated completion date is. Buyers should never assume that a proposed station or route is currently operational when calculating their anticipated commute time.
  </p>

  <h2 className="text-2xl font-bold">
    Schools, Hospitals and Daily Convenience
  </h2>

  <p>
    The availability of basic services has a major impact on whether a residential location will be suitable for both families and working professionals. Therefore, the area around the <strong>My Home Anandam location</strong> must be assessed to determine if there are sufficient educational institutions, healthcare facilities and daily shopping needs.
  </p>

  <h3 className="text-2xl font-bold">
    Educational Institutions
  </h3>

  <p>
    Families need to find schools, preschools and other educational institutions that meet their needs. When looking at different places to live, it is important to consider how long it will take you to get to school, what the school bus route is like and what the traffic will be like during school hours.
  </p>

  <h3 className="text-2xl font-bold">
    Healthcare Facilities
  </h3>

  <p>
    Hospitals, clinics, pharmacies and emergency medical services are vital to every household. Buyers should verify the location of nearby operating facilities and estimate realistic driving times from the project site.
  </p>

  <h3 className="text-2xl font-bold">
    Shopping and Daily Essentials
  </h3>

  <p>
    Supermarkets, restaurants and local shops may decrease the frequency of long-distance travel. <strong>My Home Anandam</strong> will have <strong>retail facilities at the front of the development</strong>; however, what type of business or service is offered will be determined by how it is implemented. See how retail fits into the site on the <IntLink href="/master-plan"><strong>My Home Anandam master plan</strong></IntLink> page.
  </p>

  <h2 className="text-2xl font-bold">
    Is My Home Anandam Location Suitable for Living?
  </h2>

  <p>
    The location could be appropriate for those who want to live in East Bengaluru and have good road access to Whitefield and Hoskote. Whether or not it is suitable depends upon where you work, how you commute, what types of service you need and your personal lifestyle preferences. This development will include residential buildings, common areas, landscaped spaces and retail space, along with a wide range of <IntLink href="/amenities"><strong>My Home Anandam amenities</strong></IntLink>.
  </p>

  <p>
    While these amenities may make life easier for residents within the community, they should also take into account external factors such as traffic, nearby construction projects, noise from the road and accessibility during rush hour. Visiting the site on both weekdays and weekends can assist buyers in understanding the area surrounding the site.
  </p>

  <p>
    Additionally, checking the route to work, nearby shopping centres and other essential services can help buyers assess whether this location will meet their long-term household needs.
  </p>

  <h2 className="text-2xl font-bold">
    My Home Anandam Location and Investment Potential
  </h2>

  <p>
    The <strong>East Bengaluru</strong> market can be assessed as an investment opportunity based upon employment activity, infrastructure development, housing demand and the number of competing properties available. Places that have good access to work and daily necessities may attract both owner-occupiers and renters.
  </p>

  <p>
    However, there is no guarantee of future appreciation or rental income. Buyers should compare the price they pay for a property to other similar properties, evaluate the rental demand in the immediate area, and consider maintenance costs, vacancy times and the length of time it will take to complete the development. Compare the <IntLink href="/price"><strong>My Home Anandam price</strong></IntLink> and <IntLink href="/floor-plan"><strong>floor plans</strong></IntLink> once official figures are released.
  </p>

  <p>
    <strong>My Home Anandam</strong> is currently in the <strong>pre-launch stage</strong>. Prior to investing money into this project, buyers should confirm that the developer has obtained all necessary RERA registrations, approvals, possession terms and pricing. While the size and location of My Home Anandam may indicate potential value as an investment, these factors alone are not enough to determine its true investment value.
  </p>

  <h2 className="text-2xl font-bold">
    Final Assessment of My Home Anandam Location
  </h2>

  <p>
    The <strong>My Home Anandam location</strong> provides easy access to the <strong>Whitefield–Hoskote corridor</strong> as well as connections to SH-35, Kondasapura Road and BDA Road. Whether or not this is a good place to live and invest in will be determined by the actual commute times, available social infrastructure, transportation choices and the final price of the apartments. Buyers should check the exact location of the property, visit the surrounding area, and look at what is currently available in terms of infrastructure and approval of the project prior to purchasing. Checking these things will give you a better idea of how convenient, affordable and risky (long-term) the investment would be.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

  <h3 className="text-xl font-bold">
    1. Where is My Home Anandam located?
  </h3>

  <p>
    My Home Anandam is located on Whitefield–Hoskote Main Road in East Bengaluru, Karnataka.
  </p>

  <h3 className="text-xl font-bold">
    2. Which roads connect to the My Home Anandam location?
  </h3>

  <p>
    The project corridor connects to SH-35, Kondasapura Road and BDA Road, which link the site with Whitefield, Hoskote and nearby neighbourhoods.
  </p>

  <h3 className="text-xl font-bold">
    3. Is My Home Anandam close to Whitefield?
  </h3>

  <p>
    Yes. My Home Anandam is on the Whitefield–Hoskote corridor, giving road access to Whitefield, a well-established employment and residential hub in East Bengaluru. Actual travel time depends on traffic and your destination.
  </p>

  <h3 className="text-xl font-bold">
    4. Is there metro connectivity near My Home Anandam?
  </h3>

  <p>
    Buyers should check the nearest operational metro station, bus stops and feeder services from the project entrance, and should not rely on proposed routes until they are operational.
  </p>

  <h3 className="text-xl font-bold">
    5. Are schools, hospitals and shopping available near My Home Anandam?
  </h3>

  <p>
    Buyers should verify nearby schools, hospitals and daily-needs stores along with realistic travel times. My Home Anandam also plans retail facilities at the front of the development.
  </p>

  <h3 className="text-xl font-bold">
    6. Is My Home Anandam a good location for investment?
  </h3>

  <p>
    East Bengaluru has strong employment and infrastructure activity, but appreciation is never guaranteed. Buyers should compare prices, rental demand and RERA approvals before investing in this pre-launch project.
  </p>
</div>
        </div>
      </main>
    </>
  );
}

export default LocationPage;
