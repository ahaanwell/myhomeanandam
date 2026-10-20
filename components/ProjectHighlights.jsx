/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { ExtLink, IntLink } from "./SeoLinks";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹ On Request",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "1200 to 2600 sq. ft.",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "52.5 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "5200+ Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Floor Structure",
    value: "3B + G + 38 to 48",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "27 Towers",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "MY HOME GROUP",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "Coming Soon",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  }
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="My Home Anandam project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">My Home Anandam: Explore Premium Apartments in Whitefield, Bangalore</h2>

  <p>
    <strong>My Home Codename Anandam</strong> is a landmark residential development by the reputable <strong>My Home
    Group</strong>. This huge, mixed-use township is being built in <strong>Whitefield Annex, Bangalore</strong>. It was
    planned to be a self-sufficient community with a mix of commercial and recreational spaces and
    high-rise apartment buildings. In the first phase of this large project, 850 premium <strong>2, 3, and 4 BHK
    apartments</strong> will be built with the quality and attention to detail the brand is known for.
  </p>

  <p>
    This development is one of Whitefield&#39;s most exciting residential projects. It aims to offer residents
    a peaceful place to live while keeping them connected to major employment hubs like <ExtLink href="https://en.wikipedia.org/wiki/Whitefield,_Bangalore">Whitefield</ExtLink>,
    <ExtLink href="https://en.wikipedia.org/wiki/International_Tech_Park,_Bangalore">ITPL</ExtLink>, Old Madras Road, and <ExtLink href="https://en.wikipedia.org/wiki/Krishnarajapuram">KR Puram</ExtLink>. It&#39;s close to major transportation routes, schools,
    hospitals, and shopping centres, making it a good choice for families, professionals, and real
    estate investors.
  </p>

  <p>
    My Home Group is bringing a premium new private township to <strong>Kadugodi, Whitefield, East
    Bangalore</strong>, soon. It will have 2, 3, and 4 BHK homes spread out over <strong>53 acres</strong>, along with a huge
    1,000,000-square-foot center and <strong>70% open space</strong>.
  </p>

  <p>
    These <strong>apartments in Whitefield Annex</strong> are ideal for people who want a modern lifestyle with great
    connectivity. From this spot, it&#39;s easy to reach major IT parks, top schools, hospitals, and shopping
    malls. My Home Group has a history of building high-quality homes, and this new start is a great
    chance to own a home in one of Bangalore&#39;s fastest-growing areas. You can plan your future in a
    community that was built with the future in mind. You can move in by 2029.
  </p>

  <h2 className="text-2xl font-bold">At a Glance</h2>

  <h3 className="text-2xl font-bold">Quick Project Facts</h3>

  <table className="w-full border-collapse border border-gray-300 text-left">
    <tbody>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Project type</th>
        <td className="border border-gray-300 px-4 py-2">Residential Apartments / Township</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Location</th>
        <td className="border border-gray-300 px-4 py-2">Kadugodi Road, Whitefield, East Bangalore, Karnataka</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Developer</th>
        <td className="border border-gray-300 px-4 py-2">My Home Group</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Project area</th>
        <td className="border border-gray-300 px-4 py-2">About 53 Acres (approx. 45 acres residential, 8 acres commercial)</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Configurations</th>
        <td className="border border-gray-300 px-4 py-2">2, 3 &amp; 4 BHK Apartments</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Status</th>
        <td className="border border-gray-300 px-4 py-2">Upcoming / Pre-launch (EOI Stage)</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Approval</th>
        <td className="border border-gray-300 px-4 py-2">Karnataka RERA Applied / Awaited</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">RERA status</th>
        <td className="border border-gray-300 px-4 py-2">Awaited / Under Process</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Possession</th>
        <td className="border border-gray-300 px-4 py-2">Projected from 2031 onwards; verify tower-wise dates</td>
      </tr>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Last updated</th>
        <td className="border border-gray-300 px-4 py-2">01 Oct 2026</td>
      </tr>
    </tbody>
  </table>

  <p>
    The above graphs show the progress as it is shown in the project details right now. Before
    deciding to buy, compare the accepted plans and official project papers with the final tower counts,
    building heights, unit areas, facility counts, and other details.
  </p>

  <p>
    <strong>My Home Anandam</strong> is also designed to be easy to walk around, with limited space for cars on the
    platform level. This method can help keep neighborhood leisure places away from normal traffic
    and make more room for walks, playing outside, and getting to know each other.
  </p>

  <h2 className="text-2xl font-bold">What&#39;s Unique About My Home Anandam Whitefield?</h2>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>Ideal Location:</strong> The <IntLink href="/location">My Home Anandam location</IntLink> is in Whitefield and easy to reach the Whitefield and IT areas.
    </li>
    <li>
      <strong>Smart-designed&nbsp;homes:</strong> The <IntLink href="/floor-plan">2 BHK and 3 BHK units</IntLink> at My Home Anandam Whitefield
      are spacious and designed for comfort and functionality.
    </li>
    <li>
      <strong>Lifestyle amenities:</strong> These are well-designed <IntLink href="/amenities">amenities</IntLink> that encourage enjoyment,
      exercise, safety, and convenience.
    </li>
    <li>
      <strong>Strong Investment Potential:</strong> Prices are low compared to nearby markets, and
      infrastructure is growing, which means the property will be worth more over time.
    </li>
  </ul>

  <p>
    Whether you&#39;re looking for your first home, an upgrade to a bigger place, or real estate to invest in,
    <strong>My Home Anandam Whitefield Bangalore</strong> is a well-balanced option that meets modern lifestyle
    needs while staying close to everything you need every day.
  </p>

  <h2 className="text-2xl font-bold">Details still awaited</h2>

  <ul className="list-disc space-y-2 pl-6">
    <li>Phase-wise possession schedule</li>
    <li>Approved <IntLink href="/master-plan">layout plans</IntLink> for all parcels</li>
    <li>Final all-inclusive <IntLink href="/price">cost sheet</IntLink></li>
    <li>Maintenance charges details</li>
    <li>Tower-wise amenity specifics</li>
  </ul>
</div>
      </div>
    </section>
  );
}
