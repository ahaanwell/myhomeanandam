import { IntLink, ExtLink } from "./SeoLinks";

export default function AboutDeveloper() {
  return (
    <section
      id="about-developer"
      aria-labelledby="about-developer-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="about-developer-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
            About the Developer: My Home Group
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">
            <img
              className="w-full lg:w-1/2 mx-auto"
              src="/images/my-home-group.webp"
              alt="My Home Group – developer of My Home Anandam" width={1200} height={676}
              loading="lazy"
            />
  <p>
    The <ExtLink href="https://en.wikipedia.org/wiki/Hyderabad">Hyderabad</ExtLink>-based <ExtLink href="https://www.myhomeconstructions.com/">My Home Group</ExtLink> is a top real estate company with more than 30 years of experience. The company has a large portfolio of residential, commercial, and township projects, mostly in Hyderabad but now also in Bangalore, which has a very active real estate market. The group has built commercial and residential projects that cover <strong>more than 300 lakh square feet</strong>.
  </p>

  <p>
    My Home Group has a strong foothold in key areas and is known for providing well-thought-out projects. The company is dedicated to quality, creativity, and on-time delivery. <strong>My Home Anandam Whitefield</strong> is proof of their goal to build <IntLink href="/master-plan">world-class neighborhoods</IntLink> that combine nature and modern living in a way that works well together. My Home Group remains the first choice for picky homebuyers and owners who want to live in style, thanks to its focus on customer satisfaction.
  </p>
</div>
      </div>
    </section>
  );
}
