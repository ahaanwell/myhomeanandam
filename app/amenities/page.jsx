import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/amenities",
  name: "Amenities",
  title: "My Home Anandam Amenities, Clubhouse & Open Spaces",
  description:
    "Explore My Home Anandam Amenities, including the planned clubhouse, landscaped spaces, recreation areas, pedestrian-friendly planning and shared facilities.",
  keywords: [
    "My Home Anandam amenities",
    "My Home Anandam clubhouse",
    "My Home Anandam swimming pool",
    "My Home Anandam facilities",
    "My Home Anandam lifestyle",
  ],
};

// FAQ schema – keep in sync with the FAQ section in AmenitiesPage.jsx
const FAQS = [
  {
    q: "How many amenities are planned at My Home Anandam?",
    a: "More than 250 amenities are planned across the 52.5-acre My Home Anandam development on Whitefield–Hoskote Main Road, East Bengaluru.",
  },
  {
    q: "How big is the clubhouse at My Home Anandam?",
    a: "The proposed clubhouse at My Home Anandam is approximately 110,000 sq. ft., designed as a shared indoor space for all residents.",
  },
  {
    q: "What are the key amenities at My Home Anandam?",
    a: "Planned amenities include a gymnasium, swimming pool, yoga pavilion, kids' activity zone, mini theatre, indoor games room, jogging track, tennis court, amphitheatre and EV charging points, subject to the final approved amenity list.",
  },
  {
    q: "Is My Home Anandam pedestrian-friendly?",
    a: "Yes. The proposed design restricts vehicle movement on the podium level to create a better pedestrian experience between towers, landscaped areas and shared amenities.",
  },
  {
    q: "Will there be retail shops at My Home Anandam?",
    a: "Yes. Retail facilities are planned near the entrance of the development, separate from the residential amenity areas.",
  },
  {
    q: "Is the My Home Anandam amenity list final?",
    a: "No. My Home Anandam is in the pre-launch phase, so buyers should verify the final amenity schedule, approved plans and RERA registration before booking.",
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
