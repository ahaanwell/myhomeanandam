import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/floor-plan",
  name: "Floor Plan",
  title: "My Home Anandam Floor Plans | 2, 3 & 4 BHK Apartment Layouts",
  description:
    "Explore My Home Anandam floor plans for 2, 3 & 4 BHK apartments on Whitefield–Hoskote Road, Bengaluru. View unit layouts and download the floor plan brochure.",
  keywords: [
    "My Home Anandam floor plan",
    "My Home Anandam 2 BHK floor plan",
    "My Home Anandam 3 BHK floor plan",
    "My Home Anandam 4 BHK floor plan",
    "My Home Anandam unit plan",
  ],
  image: { url: "/images/floorplans/3bhk-floorplan.webp", width: 720, height: 400, alt: "My Home Anandam 3 BHK floor plan" },
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
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
