export const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "/images/gym.svg" },
  { id: 2,  name: "Swimming Pool",       image: "/images/swm.svg" },
  { id: 3,  name: "Yoga Pavilion",       image: "/images/yoga.svg" },
  { id: 4,  name: "Video Door Phone",    image: "/images/videos.svg" },
  { id: 5,  name: "Kids Activity Zone",  image: "/images/kids.svg" },
  { id: 6,  name: "Mini Theater",        image: "/images/mine.svg" },
  { id: 7,  name: "Aerobics Room",       image: "/images/tennis.svg" },
  { id: 8,  name: "Indoor Games Room",   image: "/images/chess.svg" },
  { id: 9,  name: "Club House",          image: "/images/disco-ball.svg" },
  { id: 10, name: "Dance/Music",         image: "/images/dance.svg" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "/images/cctv.svg" },
  { id: 12, name: "Jogging Track",       image: "/images/jog.svg" },
  { id: 13, name: "Tennis Court",        image: "/images/tennis-court.svg" },
  { id: 14, name: "Amphitheatre",        image: "/images/amphitheatre.svg" },
  { id: 15, name: "EV Charging Points",  image: "/images/ev-charging.svg" },
];

export default function AmenitiesGrid() {
  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
      aria-label="My Home Anandam amenities"
    >
      {amenitiesData.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
        >
          <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
            <img
              src={item.image}
              alt={`${item.name} at My Home Anandam`}
              width={512}
              height={512}
              className="w-full h-[90%] object-contain"
              loading="lazy"
            />
          </div>

          <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
