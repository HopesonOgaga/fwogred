import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { key: "about", path: "" },
  { key: "how to buy", path: "howtobuy" },
  { key: "tokenomics", path: "tokenomics" },
  { key: "roadmap", path: "roadmap" },
  { key: "ecosystem", path: "ecosystem" },
  { key: "faqs", path: "faqs" },
  { key: "disclaimer", path: "disclaimer" }
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-6  relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src="/images/Fwog Logo.png"
            alt="Redfwog Logo"
            className="w-20 h-20 rounded-full border-4 border-navredpink"
          />
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-white text-3xl md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-xl items-center gap-6 text-white font-semibold capitalize">
          {menuItems.map(({ key, path }) => (
            <li key={key}>
              <Link
                to={`/${path}`}
                className="hover:text-navredpink transition-colors duration-200"
              >
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3  text-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-24 space-y-6 text-lg font-semibold capitalize p-6">
          {menuItems.map(({ key, path }) => (
            <li key={key}>
              <Link
                to={`/${path}`}
                className="block hover:text-navredpink transition-colors duration-200"
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional: Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
