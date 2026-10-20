import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/floor-plan",
  name: "Floor Plan",
  title: "My Home Anandam Floor Plan, 2, 3 & 4 BHK Layouts",
  description:
    "Explore My Home Anandam Floor Plan details for 2, 3 and 4 BHK apartments, indicative sizes, carpet area, room layouts and key factors for homebuyers.",
  keywords: [
    "My Home Anandam floor plan",
    "My Home Anandam 2 BHK floor plan",
    "My Home Anandam 3 BHK floor plan",
    "My Home Anandam 4 BHK floor plan",
    "My Home Anandam unit plan",
  ],
  image: { url: "/images/floorplans/3bhk-floorplan.webp", width: 720, height: 400, alt: "My Home Anandam 3 BHK floor plan" },
};

// FAQ schema – keep in sync with the FAQ section in FloorPlanPage.jsx
const FAQS = [
  {
    q: "What apartment configurations are available in the My Home Anandam floor plan?",
    a: "My Home Anandam offers 2, 3 & 4 BHK apartments, with indicative sizes ranging from approximately 1,240 sq. ft. to 2,600 sq. ft.",
  },
  {
    q: "What is the size of the My Home Anandam 2 BHK floor plan?",
    a: "The proposed 2 BHK apartments at My Home Anandam are approximately 1,240–1,300 sq. ft.",
  },
  {
    q: "What is the size of the My Home Anandam 3 BHK floor plan?",
    a: "The proposed 3 BHK apartments range from approximately 1,600 to 2,000 sq. ft.",
  },
  {
    q: "What is the size of the My Home Anandam 4 BHK floor plan?",
    a: "The proposed 4 BHK apartments are approximately 2,300–2,600 sq. ft.",
  },
  {
    q: "Are the My Home Anandam floor plan sizes carpet area?",
    a: "No. The sizes shared so far are indicative and should not be treated as confirmed carpet areas. Buyers should check the official area statement once it is released.",
  },
  {
    q: "How can I download the My Home Anandam floor plan?",
    a: "You can request the My Home Anandam floor plan brochure using the Download option on this page. Official detailed drawings will be shared once the project launches.",
  },
];

export const metadata = pageMetadata(PAGE);

export default function Page() {
  const schema = pageSchema(PAGE);
  schema["@graph"].push({
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
