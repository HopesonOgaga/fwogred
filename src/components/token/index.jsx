import React from "react";

const tokenomics = [
  { label: "Liquidity Pool", value: 60, color: "#ff0000" },
  { label: "Team", value: 10, color: "#ff4d4d" },
  { label: "Staking", value: 15, color: "#ff6666" },
  { label: "Marketing", value: 10, color: "#cc0000" },
  { label: "CEX Listings", value: 5, color: "#990000" },
  { label: "Treasury", value: 5, color: "#660000" },
];

const radius = 80;
const strokeWidth = 40;
const center = 100;
const circumference = 2 * Math.PI * radius;

function getOffset(values, index) {
  const total = values.reduce((sum, item) => sum + item.value, 0);
  const offsetPercent = values
    .slice(0, index)
    .reduce((sum, item) => sum + item.value, 0);
  return (offsetPercent / total) * circumference;
}

export default function TokenomicsSection() {
  const total = tokenomics.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="py-16 px-4 w-full text-white text-center ">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12">
        🧠 Tokenomics
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Pie Chart */}
        <div className="relative w-[220px] sm:w-[260px] h-[220px] sm:h-[260px]">
          <svg
            viewBox="0 0 200 200"
            className="rotate-[-90deg] drop-shadow-xl"
          >
            {tokenomics.map((item, index) => {
              const dash = (item.value / total) * circumference;
              const offset = getOffset(tokenomics, index);
              return (
                <circle
                  key={index}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="round"
                  style={{
                    filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.5))",
                  }}
                />
              );
            })}
          </svg>

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="text-xs sm:text-sm opacity-70">Total Supply</p>
            <p className="text-base sm:text-lg font-bold">1B $REDFWOG</p>
          </div>
        </div>

        {/* Tokenomics Breakdown */}
        <div className="w-full max-w-xs space-y-4 bg-red-950/30 border border-red-800 p-6 rounded-xl shadow-lg">
          {tokenomics.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-sm font-medium">
                {item.label}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Token Info Section */}
      <section className="mt-10 flex flex-col gap-6 items-center">
        <div className="max-w-sm w-full border-2 border-red-700 rounded-md shadow-md bg-zinc-900 text-left">
          <div className="p-5">
            <h3 className="text-xl font-semibold text-center mb-4 uppercase">
              Statistics
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <strong>Token Name:</strong> Redfwog
              </li>
              <li>
                <strong>Ticker:</strong> $REDFWOG
              </li>
              <li>
                <strong>Total Supply:</strong> 1,000,000,000
              </li>
              <li>
                <strong>Blockchain:</strong> Avalanche (AVAX)
              </li>
              <li>
                <strong>Tax:</strong> 0%
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm max-w-md text-center px-4 text-zinc-300">
          Deflationary Tokenomics: Cold staking charges a 0.5% fee, burns 40% of it, roasting 2.4M $REDFWOG/year at 100M staked. The DAO controls the spicy burn level.
        </p>
      </section>
    </section>
  );
}
