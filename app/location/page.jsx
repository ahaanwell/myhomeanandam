import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/location",
  name: "Location",
  title: "My Home Anandam Location & Connectivity Guide",
  description:
    "Explore My Home Anandam Location, road connectivity, Whitefield access, nearby infrastructure, public transport, daily living convenience and investment potential in East Bengaluru.",
  keywords: [
    "My Home Anandam location",
    "My Home Anandam address",
    "My Home Anandam Whitefield Hoskote Road",
    "My Home Anandam connectivity",
    "apartments near Whitefield Hoskote Road",
  ],
};

// FAQ schema – keep in sync with the FAQ section in LocationPage.jsx
const FAQS = [
  {
    q: "Where is My Home Anandam located?",
    a: "My Home Anandam is located on Whitefield–Hoskote Main Road in East Bengaluru, Karnataka.",
  },
  {
    q: "Which roads connect to the My Home Anandam location?",
    a: "The project corridor connects to SH-35, Kondasapura Road and BDA Road, which link the site with Whitefield, Hoskote and nearby neighbourhoods.",
  },
  {
    q: "Is My Home Anandam close to Whitefield?",
    a: "Yes. My Home Anandam is on the Whitefield–Hoskote corridor, giving road access to Whitefield, a well-established employment and residential hub in East Bengaluru. Actual travel time depends on traffic and your destination.",
  },
  {
    q: "Is there metro connectivity near My Home Anandam?",
    a: "Buyers should check the nearest operational metro station, bus stops and feeder services from the project entrance, and should not rely on proposed routes until they are operational.",
  },
  {
    q: "Are schools, hospitals and shopping available near My Home Anandam?",
    a: "Buyers should verify nearby schools, hospitals and daily-needs stores along with realistic travel times. My Home Anandam also plans retail facilities at the front of the development.",
  },
  {
    q: "Is My Home Anandam a good location for investment?",
    a: "East Bengaluru has strong employment and infrastructure activity, but appreciation is never guaranteed. Buyers should compare prices, rental demand and RERA approvals before investing in this pre-launch project.",
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}
