import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";
import { pageMetadata, pageSchema } from "@/lib/seo";

const PAGE = {
  path: "/price",
  name: "Price",
  title: "My Home Anandam Price List | 2, 3 & 4 BHK | Whitefield–Hoskote",
  description:
    "Check the My Home Anandam price list for 2, 3 & 4 BHK apartments on Whitefield–Hoskote Road, Bengaluru. Request the latest cost sheet and pre-launch offers.",
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

export const metadata = pageMetadata(PAGE);

export default function Page() {
  const schema = pageSchema(PAGE);

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
