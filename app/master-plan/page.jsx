import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/master-plan",
  name: "Master Plan",
  title: "My Home Anandam Master Plan | 52.5 Acres, 27 Towers",
  description:
    "View the My Home Anandam master plan: 27 towers across 52.5 acres on Whitefield–Hoskote Road, Bengaluru. See the site layout, open spaces and amenity zones.",
  keywords: [
    "My Home Anandam master plan",
    "My Home Anandam site plan",
    "My Home Anandam layout",
    "My Home Anandam towers",
    "My Home Anandam 52.5 acres",
  ],
  image: { url: "/images/master-plan.webp", width: 1250, height: 750, alt: "My Home Anandam master plan" },
};

export const metadata = pageMetadata(PAGE);

export default function Page() {
  const schema = pageSchema(PAGE);

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
