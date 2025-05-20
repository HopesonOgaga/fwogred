import FaqSection from "../components/faq";
import Nav from "../components/nav";
import { cards } from "../constant/arr";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <section className="bg-gradient-to-r from-black to-red-600 min-h-screen px-4 sm:px-6 w-full">
        <section className="flex flex-col gap-20 w-full min-h-screen">
          <div className="flex md:justify-between justify-around w-full min-h-screen items-center flex-col-reverse md:flex-row">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <div>
                <p className="capitalize font-bold text-4xl sm:text-5xl text-white">
                  <span className="text-red-700">Ribbit </span> For Gains.
                </p>
                <p className="capitalize font-bold text-4xl sm:text-5xl text-white">
                  <span className="text-red-700">red </span>fwog
                </p>
                <p className="capitalize font-bold text-4xl sm:text-5xl text-white">
                  <span className="text-red-700">run </span>it back
                </p>
              </div>
              <p className="text-white text-sm sm:text-base">
                The degen meme coin Avax didn’t know it needed.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="text-white font-medium text-sm sm:text-lg capitalize border-2 border-red-600 bg-black-800 w-32 h-10 rounded-xl">
                  join the pond
                </button>
                <button className="text-white font-medium text-sm sm:text-lg capitalize border-2 border-red-600 bg-black-800 w-32 h-10 rounded-xl">
                  buy red fwog
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 relative flex justify-center items-center mb-8 mt-10 md:mt-0">
              <img
                src="/images/Slot Machine Glow.svg"
                alt="Slot machine background"
                className="absolute w-[80vw] md:w-full max-w-md z-0"
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
            <button className="w-12 h-8 text-white capitalize bg-black rounded-2xl shadow-xl">
              next
            </button>
          </div>
        </section>

        {/* gaming section */}
        <section className="bg-gradient-to-r from-black to-red-600 w-full py-12 px-4 flex flex-col items-center">
          <h2 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl capitalize text-center mb-10">
            the <span className="text-red-800">redfwog</span> lore
          </h2>

          <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl items-center justify-center">
            {/* GameBoy Console */}
            <div className="border-4 border-red-700 w-full md:w-1/3 p-6 rounded-lg shadow-lg bg-red-800 h-[70vh]">
              <div className="flex justify-center mb-6">
                <img
                  src="/images/save.png"
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
                  <img src="/images/Back Button.png" alt="Back button" />
                  <img src="/images/Next Button.png" alt="Next button" />
                </div>
              </div>
            </div>

            {/* Lore Text */}
            <div className="border-4 border-red-700 rounded-lg shadow-lg w-full md:w-1/2 p-6 bg-black bg-opacity-30 max-h-[400px] overflow-y-auto">
              <p className="text-white text-sm leading-relaxed">
                In the lush swamps of Verdant Vale, Fwog a curious young
                amphibian, discovers an ancient lily pad inscribed with a
                propehcy. It speaks of a hidden real where the Great toadstone
                lies. A gem that can resstore balance to the swamp. Driven by
                destiny, Fwog sets out leaving the safety of home to face
                unknown perils.In the lush swamps of Verdant Vale, Fwog a
                curious young amphibian, discovers an ancient lily pad inscribed
                with a propehcy. It speaks of a hidden real where the Great
                toadstone lies. A gem that can resstore balance to the swamp.
                Driven by destiny, Fwog sets out leaving the safety of home to
                face unknown perils.
              </p>
            </div>
          </div>
        </section>

        {/* why croak with us */}
        <section className="px-4 py-12 w-full">
          <div className="mb-10 text-center">
            <h2 className="capitalize text-3xl md:text-5xl font-bold text-white">
              why <span className="text-red-800">croak</span> with us
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {cards.map((card, index) => (
              <article
                key={index}
                className="bg-gray-950 w-full sm:w-[45%] lg:w-[20%] border-4 border-red-600 rounded-lg shadow-md p-4 flex flex-col lg:gap-8 items-start"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-base text-white">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* fwog roll */}
        <section className="py-12 px-4 bg-gradient-to-r from-black to-red-600 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="capitalize text-3xl md:text-5xl font-bold text-white">
              How To <span className="text-red-600">Fwog ‘n’ Roll</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 w-full">
            {cards.map((card, index) => (
              <article
                key={index}
                className="bg-gray-950 w-full sm:w-[45%] lg:w-[20%] border-4 border-red-600 rounded-lg shadow-md p-4 flex flex-col lg:gap-8 items-start"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-base text-white">{card.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 w-full flex justify-center">
            <button className="bg-gradient-to-r from-black to-red-600 text-lg font-semibold capitalize text-white rounded-xl shadow-xl w-full md:w-1/6 h-12 border-4 border-solid border-red-600">
              buy red fwog
            </button>
          </div>
        </section>
         <FaqSection></FaqSection>
        {/* fwog army */}
        <section className="py-16 px-4 md:px-10 w-full flex flex-col items-center gap-10 mt-10">
          <div className="text-center space-y-4">
            <p className="text-4xl md:text-5xl font-bold text-white capitalize">
              <span className="text-red-700">FwogArmy</span> Assemble
            </p>
            <p className="text-white text-base">
              Memes. Shitposts. Hop wars. Vibe first, ask later.
            </p>
          </div>

          <div className="flex gap-8 flex-wrap justify-center">
            {["discord", "telegram", "twitter"].map((platform, i) => (
              <a
                key={i}
                href="/"
                className="text-white font-medium capitalize flex items-center gap-2"
              >
                <img src="" alt={`${platform} icon`} className="w-6 h-6" />
                {platform}
              </a>
            ))}
          </div>

          <div>
            <img
              src="/images/redheds.png"
              alt="Fwog Army"
              className="w-full max-w-md"
            />
          </div>
        </section>
      </section>
    </>
  );
}
