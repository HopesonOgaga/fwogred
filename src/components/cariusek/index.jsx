import React, { useState } from "react";

export const card_slide = [
  {
    title: "RedFwog Rises",
    text: "Redfwog was done—DONE—watching smug green frogs hop into fame while he ate dirt in the shadows. “Fwog’s out there flexing, and I’m here with the flies?” he grumbled. Sick of being the sidekick, he dusted off his red glow and swore: “My turn to shine, losers",
    image: "/images/red.png",
  },
  {
    title: "The Dream Team",
    text: "Armed with grit and a Wi-Fi signal, Redfwog rounded up a crew of glorious weirdos—meme-churning, trench-dwelling degenerates who’d rather stack laughs than cash (for now).",
    image: "/images/reda.png",
  },
  {
    title: "Pick a Side",
    text: "Now, with dank memes flowing like trench water and his misfit army hyping him up, Redfwog’s clout is spiking. The green frog elite? Shaking. The question is: You sticking with those basic, slimy sellouts, or riding with the red revolution? Join the Red Society, fam—before we’re too cool for you!",
    image: "/images/redice.png",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = card_slide[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % card_slide.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? card_slide.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-black to-red-600 w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl capitalize text-center mb-10">
        the <span className="text-red-800">redfwog</span> lore
      </h2>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl items-center justify-center">
        {/* GameBoy Console */}
        <div className="border-4 border-red-700 w-full md:w-1/3 p-6 rounded-lg shadow-lg bg-red-800 h-[80vh]">
          <div className="flex justify-center mb-6">
            <img
              src={currentSlide.image}
              alt="Gameboy screen"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex justify-around w-full">
              <img src="/images/logbutton.png" alt="Log button" />
              <div className="flex gap-4">
                <img
                  src="/images/A Button.png"
                  alt="A button"
                  className="w-14 h-14"
                />
                <img
                  src="/images/B Button.png"
                  alt="B button"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <img
                src="/images/Back Button.png"
                alt="Back button"
                onClick={prevSlide}
                className="cursor-pointer"
              />
              <img
                src="/images/Next Button.png"
                alt="Next button"
                onClick={nextSlide}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Lore Text */}
        <div className="border-4 border-red-700 rounded-lg shadow-lg w-full md:w-1/2 p-6 bg-black bg-opacity-30 max-h-[400px] overflow-y-auto">
          <h3 className="text-red-500 text-xl font-bold mb-4">{currentSlide.title}</h3>
          <p className="text-white text-sm leading-relaxed">
            {currentSlide.text}
          </p>
        </div>
      </div>
    </section>
  );
}
