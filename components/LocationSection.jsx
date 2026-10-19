/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import Link from "next/link";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.814120641986!2d77.75246659999999!3d12.983737699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e04f337a7ed%3A0x2ecabd34a3a9e533!2sSH%2035%20%26%20Whitefield%20-%20Hoskote%20Rd%2C%20Maithri%20Layout%2C%20Kadugodi%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1790658757080!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white py-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location of My Home Anandam
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="w-full h-[380px] md:h-[460px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Home Anandam location map — Whitefield-Hoskote Road, Bangalore East"
              aria-label="Google Maps showing My Home Anandam location on Whitefield-Hoskote Road, Bangalore East"
            />
          </div>

          <Link
            href="https://maps.app.goo.gl/mgHt22xpDC33Br8B9"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Know more about My Home Anandam location on Whitefield-Hoskote Road"
            className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>
        
      </div>
    </section>
  );
}
