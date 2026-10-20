import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/price",
  name: "Price",
  title: "My Home Anandam Price, Apartment Sizes & Cost",
  description:
    "Explore My Home Anandam Price details, proposed 2, 3 and 4 BHK apartment sizes, pricing factors, additional charges and key budgeting considerations.",
  keywords: [
    "My Home Anandam price",
    "My Home Anandam price list",
    "My Home Anandam cost sheet",
    "My Home Anandam 2 BHK price",
    "My Home Anandam 3 BHK price",
    "My Home Anandam 4 BHK price",
    "Whitefield Hoskote Road apartment price",
  ],
};

// FAQ schema – keep in sync with the FAQ section in PricePage.jsx
const FAQS = [
  {
    q: "What is the current My Home Anandam price?",
    a: "The official My Home Anandam price list has not been released yet, as the project is in the pre-launch stage. Buyers should obtain the latest price list and cost sheet directly from the developer.",
  },
  {
    q: "What is the size of a 2 BHK apartment at My Home Anandam?",
    a: "The indicative size of a 2 BHK apartment at My Home Anandam is approximately 1,240–1,300 sq. ft.",
  },
  {
    q: "What is the size of a 3 BHK apartment at My Home Anandam?",
    a: "The proposed 3 BHK apartments range from approximately 1,600 to 2,000 sq. ft.",
  },
  {
    q: "What is the size of a 4 BHK apartment at My Home Anandam?",
    a: "The indicative size of a 4 BHK apartment is approximately 2,300–2,600 sq. ft.",
  },
  {
    q: "Are additional charges included in the My Home Anandam price?",
    a: "This has not been confirmed. Buyers should request an itemised quotation showing the base price, applicable GST, stamp duty and registration charges, parking and other charges.",
  },
  {
    q: "Is My Home Anandam currently in the pre-launch phase?",
    a: "Yes. My Home Anandam is in the pre-launch stage with launch updates expected in 2027. Buyers should verify the latest approvals and RERA registration details before booking.",
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
      <PricePage />
      <BlogSection/>
    </>
  );
}
