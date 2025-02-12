import { useState } from "react";

const ImageCarousel = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLz3xpx_hviWogy-vNZoE0kVPwc1KYoRn46g&s",
    "https://m.media-amazon.com/images/M/MV5BZDUxNThhYTUtYjgxNy00MGQ4LTgzOTEtZjg1YTU5NTcwNThlXkEyXkFqcGc@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n3-eDHB2LcPntjIiEXcXYB3RNkH0-wvRbg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlyggKSf1GKvw27skrpmYlcba68acmPnweg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVWS4o_uYyZ0P4sdiAicyGe5RLfnxVk9_Qg&s",
    "https://lumiere-a.akamaihd.net/v1/images/au_movies_disney_mufasa_thelionking_payoff_pg_d4de9ce3.jpeg?region=0%2C0%2C1080%2C1600",
    "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/c60c6b15-37fd-4bf8-88c1-1a7959d72bcc/2515828471/night-agent-im-the-savior-screenshot.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjWy1tNDhud9yWzHMY7ooP3NOhIsMkOIyGg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhk-UmAZ3t0W11LrjeG01J1kfXJDIyVi7sQ&s",
    "https://asianwiki.com/images/7/73/When_the_Stars_Gossip-p.jpg",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 7; // Number of images visible at a time

  const handleNext = () => {
    if (startIndex + visibleImages < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center px-4">
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 bg-black text-white px-5 py-3 rounded-full shadow-md hover:bg-gray-800 transition cursor-pointer font-extrabold text-2xl"
        aria-label="Previous Image"
        disabled={startIndex === 0}
      >
        &lt;
      </button>

      {/* Image Container */}
      <div className="overflow-hidden w-full max-w-[90vw]">
        <div
          className="flex gap-5 transition-transform duration-300"
          style={{ transform: `translateX(-${startIndex * 170}px)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[180px] h-[300px] object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 z-10 bg-black text-white px-5 py-3 rounded-full shadow-md hover:bg-gray-800 transition cursor-pointer font-extrabold text-2xl"
        aria-label="Next Image"
        disabled={startIndex + visibleImages >= images.length}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
