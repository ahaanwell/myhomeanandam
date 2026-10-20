import AboutDeveloper from "@/components/AboutDeveloper";
import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogsSection";
import EMICalculator from "@/components/Emicalculator";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import InvestmentSection from "@/components/InvestmentSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import ReraLegalAndApproval from "@/components/ReraLegalAndApproval";
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
    // FAQ schema – keep in sync with components/FaqSection.jsx
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the entire township area of My Home Anandam Whitefield?",
          acceptedAnswer: { "@type": "Answer", text: "The project covers around 53 acres, including 45 acres of residential development and 8 acres of commercial space, with approximately 70% open space." },
        },
        {
          "@type": "Question",
          name: "How many towers and flats are there at My Home Anandam Whitefield?",
          acceptedAnswer: { "@type": "Answer", text: "The township will have 27 buildings in total, including 8 towers in the initial phase, as well as around 5,000 houses across the complex." },
        },
        {
          "@type": "Question",
          name: "What is the current project status?",
          acceptedAnswer: { "@type": "Answer", text: "My Home Codename Anandam is a new launch project, with possession scheduled for 2029." },
        },
        {
          "@type": "Question",
          name: "What is the RERA number for My Home Anandam Whitefield?",
          acceptedAnswer: { "@type": "Answer", text: "The project is now in the Expression of Interest (EOI) stage, while Karnataka RERA registration is pending. Buyers should check the status on the official Karnataka RERA site before making any payments." },
        },
        {
          "@type": "Question",
          name: "How can I get the most recent brochure for My Home Anandam Whitefield?",
          acceptedAnswer: { "@type": "Answer", text: "You may get the most recent brochure by completing the inquiry form on this website or by contacting our adviser directly for project information, pricing, and site visit scheduling." },
        },
      ],
    },
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
    <EMICalculator/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <LocationSection/>
    <InvestmentSection/>
    <ReraLegalAndApproval/>
    <AboutDeveloper/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
