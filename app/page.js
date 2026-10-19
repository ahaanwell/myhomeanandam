import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogsSection";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, projectNode } from "@/lib/seo";

// Title, description and social tags come from the root layout defaults
export const metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  keywords: [
    "My Home Anandam",
    "My Home Anandam Bangalore",
    "My Home Anandam Bengaluru",
    "My Home Anandam Whitefield Hoskote Road",
    "My Home Group Bangalore",
    "My Home Group first project in Bengaluru",
    "My Home Anandam pre launch",
    "My Home Anandam 2 BHK",
    "My Home Anandam 3 BHK",
    "My Home Anandam 4 BHK",
    "pre launch apartments Whitefield Hoskote Road",
    "2, 3 and 4 BHK apartments East Bangalore",
  ],
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: HOME_TITLE,
      description: HOME_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#project` },
      primaryImageOfPage: `${SITE_URL}/images/banners/my-home-anandam.webp`,
    },
    projectNode,
  ],
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
    />
    <HeroSection/>
    <ProjectHighlights/>
    <PriceListSection/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <LocationSection/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
