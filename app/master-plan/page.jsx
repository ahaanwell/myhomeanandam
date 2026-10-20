import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/master-plan",
  name: "Master Plan",
  title: "My Home Anandam Master Plan, Layout & Amenities",
  description:
    "Explore the My Home Anandam Master Plan, including tower layout, landscaped spaces, clubhouse, amenities, retail planning and internal access routes in East Bengaluru.",
  keywords: [
    "My Home Anandam master plan",
    "My Home Anandam site plan",
    "My Home Anandam layout",
    "My Home Anandam towers",
    "My Home Anandam 52.5 acres",
  ],
  image: { url: "/images/master-plan.webp", width: 1250, height: 750, alt: "My Home Anandam master plan" },
};

// FAQ schema – keep in sync with the FAQ section in MasterPlanPage.jsx
const FAQS = [
  {
    q: "What is the total land area of My Home Anandam?",
    a: "As per the My Home Anandam master plan, the project is being developed on approximately 52.5 acres on Whitefield–Hoskote Main Road in East Bengaluru.",
  },
  {
    q: "How many towers are there in the My Home Anandam master plan?",
    a: "The My Home Anandam master plan includes 27 residential towers with more than 5,200 residential units.",
  },
  {
    q: "How big is the clubhouse at My Home Anandam?",
    a: "The proposed development includes a clubhouse of approximately 110,000 sq. ft. and more than 250 planned amenities across the community.",
  },
  {
    q: "Does the My Home Anandam master plan include retail spaces?",
    a: "Yes. Retail facilities are planned near the entrance of the development, separating the commercial-facing area from the residential zone.",
  },
  {
    q: "Is the My Home Anandam master plan final?",
    a: "No. My Home Anandam is in the pre-launch phase, so the final approved master plan may differ from preliminary information. Buyers should rely on the latest official documents and RERA registration.",
  },
  {
    q: "How can I download the My Home Anandam master plan?",
    a: "You can request the My Home Anandam master plan using the Download option on this page. The official approved layout will be shared once the project launches.",
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
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}
