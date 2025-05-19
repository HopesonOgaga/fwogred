import { cards } from "../constant/arr";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-black to-red-600 h-screen px-6 w-full">
      <section>
        <div className="flex justify-between w-full h-screen items-center ">
          <div className="flex flex-col gap-6">
            <div>
              <p className="capitalize font-bold text-5xl text-white">
                <span className="text-red-700">Ribbit </span> For Gains.
              </p>
              <p className="capitalize font-bold text-5xl text-white">
                <span className="text-red-700">red </span>fwog
              </p>
              <p className="capitalize font-bold text-5xl text-white">
                <span className="text-red-700">run </span>it back
              </p>
            </div>
            <p className="text-white">
              The degen meme coin Avax didn’t know it needed.
            </p>
            <div className="flex gap-4">
              <button className="text-white font-medium text-lg capitalize border-2 border-red-600 bg-black-800 w-32 h-8 rounded-xl">
                join the pond
              </button>
              <button className="text-white font-medium text-lg capitalize border-2 border-red-600 bg-black-800 w-32 h-8 rounded-xl">
                buy red fwog
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 relative flex justify-center items-center mb-8">
            <img
              src="/images/Slot Machine Glow.svg"
              alt="Slot machine background"
              className="absolute w-[65vw] md:w-full max-w-md z-0"
            />
            <div className="flex md:-mt-24 gap-4 -mt-10">
              {[1, 2, 3].map((_, i) => (
                <img
                  key={i}
                  src="/images/Fwog Logo.png"
                  alt={`Redfwog logo ${i + 1}`}
                  className="relative z-10 w-10 h-10 md:w-20 md:h-40 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" w-12 h-8 text-white capitalize bg-black rounded-2xl shadow-xl ">
            next
          </button>
        </div>
      </section>
      {/* gaming section */}
      <section className="bg-gradient-to-r from-black to-red-600 md:h-screen w-full py-12 px-4 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-white font-semibold text-4xl md:text-5xl capitalize text-center mb-10">
          the <span className="text-red-800">redfwog</span> lore
        </h2>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl items-center justify-center ">
          {/* GameBoy Console */}
          <div className="border-4 border-red-700 w-full md:w-1/3 p-6 rounded-lg  shadow-lg bg-red-800 h-[70vh]">
            {/* Screen */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/save.png"
                alt="Gameboy screen"
                className="max-w-full h-auto"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-6 items-center">
              {/* Top Buttons */}
              <div className="flex justify-around w-full">
                <img
                  src="/images/logbutton.png"
                  alt="Log button"
                  className=""
                />
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

              {/* Navigation Buttons */}
              <div className="flex gap-6">
                <img
                  src="/images/Back Button.png"
                  alt="Back button"
                  className=""
                />
                <img
                  src="/images/Next Button.png"
                  alt="Next button"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Lore Text */}
          <div className="border-4 border-red-700 rounded-lg shadow-lg w-full md:w-1/2 p-6 bg-black bg-opacity-30 max-h-[400px] overflow-y-auto">
            <p className="text-white text-sm leading-relaxed">
              In the lush swamps of Verdant Vale, Fwog — a curious young
              amphibian — discovers an ancient lily pad inscribed with a
              prophecy. It speaks of a hidden realm where the Great Toadstone
              lies — a gem that can restore balance to the swamp. Driven by
              destiny, Fwog sets out, leaving the safety of home to face unknown
              perils.
              <br />
              <br />
              Through overgrown reeds and past forgotten ruins, the journey
              tests his courage. Legends speak of those who sought the Toadstone
              and never returned. But Fwog believes. In his leap toward fate, he
              becomes more than just a swamp-dweller — he becomes the redfwog.
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="">
        <div>
          <div className="mb-10 text-center">
            <h2 className="capitalize text-2xl md:text-5xl font-bold">
              why <span className="text-red-800">croak</span> with us
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {cards.map((card, index) => (
              <article
                key={index}
                className="bg-gray-950 w-full sm:w-[45%] lg:w-[20%] lg:h-[45vh]  border-4 border-red-600 rounded-lg shadow-md p-4 flex flex-col lg:gap-8 items-start "
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className=" text-base text-white ">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* fwog roll */}
      <section className="py-12 px-4 bg-white bg-gradient-to-r from-black to-red-600 h-full md:h-screen flex justify-center items-center ">
        <div className="hidden md:flex"></div>
        <div className="flex flex-col w-full h-full gap-6 ">
          <div className="mb-10 text-center">
            <h2 className="capitalize text-5xl font-bold">
              How To <span className="text-red-600">Fwog ‘n’ Roll</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {cards.map((card, index) => (
              <article
                key={index}
                className="bg-gray-950 w-full sm:w-[45%] lg:w-[20%] lg:h-[45vh]  border-4 border-red-600 rounded-lg shadow-md p-4 flex flex-col lg:gap-8 items-start "
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className=" text-base text-white ">{card.text}</p>
              </article>
            ))}
          </div>
          <div className=" mt-6 flex justify-center w-full">
            <button className=" bg-gradient-to-r from-black to-red-600 text-lg font-semibold capitalize text-white rounded-xl shadow-xl w-full md:w-1/6 h-12 border-4 border-solid border-red-600">
              buy red fwog
            </button>
          </div>
          {/* mobile button */}
        </div>
        <div className="hidden md:flex"></div>
      </section>
    </section>
  );
}
