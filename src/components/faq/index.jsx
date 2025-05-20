import { useState } from "react";

export const FAQ = [
  {
    questions: "What is $REDFWOG?",
    text: "$REDFWOG is the chaotic, red-hot fuel powering Redfwog’s meme empire. Think of it as the blood in the veins of a frog who’s done eating flies and ready to flex. It’s a token, a vibe, a middle finger to boring green frogs—whatever you want it to be while we grind our way out of the mud.",
  },
  {
    questions: "Why join the red society?",
    text: "Ans. Why NOT? Our society is where the real ones vibe. Underdogs, meme lords, and trench survivors who’d rather laugh than bow to the basics. You get front-row seats to Redfwog’s rise, exclusive dankness, and a chance to stick it to the green frog elite. Plus, we’re more fun than a barrel of radioactive frogs. Join or get left in the slime!",
  },
  {
    questions: "Who the heck is Redfwog anyway?",
    text: "Redfwog is just red frog with a chip on his shoulder and a meme in his pocket. Tired of his pal fwog hogging the spotlight, he’s the underdog king grinding to build a dank empire. Part hustler, part chaos agent—100% over the green frog hype train.",
  },
  {
    questions: "Is this a memecoin thing or what?",
    text: "$REDFWOG’s got memecoin energy, but it’s more than that. It’s a movement, a rebellion, a “we’re-not-green-and-boring” flex built to make waves.",
  },
  {
    questions: "How do I buy $REDFWOG?",
    text: "Patience, fam—we’re still cooking in the swamp kitchen. Follow Redfwog on X, join the community on telegram, and keep your eyes peeled for the drop. Good things come to those who grind (or at least stalk our updates like a pro).",
  },
  {
    questions: "What’s with all the frog drama?",
    text: "Frogs are life, man. Green ones got famous, forgot their roots, and left Redfwog in the dust. Now it’s personal, red vs. green, underdog vs. elite. It’s not just drama; it’s a meme war with extra spice",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-white">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-navredpink">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <div
            key={index}
            className="border border-navredpink rounded-md overflow-hidden bg-red-950"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-navredpink/20 hover:bg-navredpink/30 transition-colors duration-200 flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{item.questions}</span>
              <span className="text-4xl font-bold capitalize">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`px-6 py-4bg-gradient-to-r from-black to-red-800 text-sm leading-relaxed transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
