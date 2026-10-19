import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/amenities",
  name: "Amenities",
  title: "My Home Anandam Amenities | Clubhouse, Pool & Lifestyle Features",
  description:
    "Discover the amenities at My Home Anandam on Whitefield–Hoskote Road, Bengaluru: clubhouse, swimming pool, gym, sports courts, kids' play areas and more.",
  keywords: [
    "My Home Anandam amenities",
    "My Home Anandam clubhouse",
    "My Home Anandam swimming pool",
    "My Home Anandam facilities",
    "My Home Anandam lifestyle",
  ],
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
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
