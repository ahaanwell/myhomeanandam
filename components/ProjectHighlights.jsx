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
      </div>
    </section>
  );
}
