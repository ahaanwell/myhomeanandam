import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/location",
  name: "Location",
  title: "My Home Anandam Location | Whitefield–Hoskote Road, Bengaluru",
  description:
    "Find the My Home Anandam location on Whitefield–Hoskote Road, East Bengaluru. Explore connectivity to IT hubs, schools, hospitals and shopping nearby.",
  keywords: [
    "My Home Anandam location",
    "My Home Anandam address",
    "My Home Anandam Whitefield Hoskote Road",
    "My Home Anandam connectivity",
    "apartments near Whitefield Hoskote Road",
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
      <LocationPage />
      <BlogSection/>
    </>
  );
}
