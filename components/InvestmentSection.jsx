/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";

export default function InvestmentSection() {
  return (
    <section
      id="Investment"
      aria-labelledby="investment-heading"
      className="w-full bg-white px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="investment-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
            Is My Home Anandam a Good Investment?
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">
            <img
              className="w-full lg:w-1/2 mx-auto"
              src="/images/investment.webp"
              alt="Is My Home Anandam a good investment – East Bangalore real estate" width={1200} height={675}
              loading="lazy"
            />
  <p>
    Property investors should consider <strong>Bengaluru</strong> because it has many jobs and people want to live there. But not every place will bring in the same amount of rent or value.
  </p>

  <p>
    Consider the purchase price, local supply, tenant demand, upkeep costs, <ExtLink href="https://nhb.org.in/">financing costs</ExtLink>, and how long you plan to hold the investment. The legal status of the development and when people can move in are also important, especially when the project is still new.
  </p>

  <p>
    People interested in buying in <strong>East Bangalore</strong> may also consider <IntLink href="/master-plan">My Home Anandam's suggested site and size</IntLink>. Still, future price growth is not guaranteed. Investors should compare the project with other homes in the area and decide whether the expected rental income is high enough to cover the full cost of the project.
  </p>

  <p>
    The best property for an investor fits their financial goals and risk tolerance, not one they choose because the city as a whole is growing.
  </p>
</div>
      </div>
    </section>
  );
}
