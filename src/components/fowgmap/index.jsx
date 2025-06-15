export default function FwogMap() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-start items-start">
      <section className="w-full">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl text-red-500 text-center font-bold capitalize mb-8">
            Fwogmap
          </p>
        </div>
        <section className="flex flex-col md:flex-row flex-wrap w-full items-center justify-center  px-4 gap-10">
          {/* Phase 1 */}
          <div className="flex flex-col gap-10 w-full md:w-[45%] lg:w-[22%] items-center justify-center">
            <div
              className="flex flex-col gap-2 w-32 h-32 sm:w-40 sm:h-40 rounded-full items-center justify-center"
              style={{
                backgroundImage: "url('/images/mask.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white font-medium capitalize">phase 1</p>
              <p className="text-white font-medium capitalize">q1 2025</p>
            </div>
            <div className="flex min-h-[200px] flex-col gap-2 mt-4 border-solid bg-black border-4 border-red-600 w-full p-4 rounded-md shadow-md">
              <p className="text-white font-semibold capitalize text-2xl">foundation</p>
              <li className="text-white font-normal">Create RedFwog Brand</li>
              <li className="text-white font-normal">Launch Website</li>
              <li className="text-white font-normal">Launch Socials</li>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="flex flex-col md:flex-col-reverse gap-10 w-full md:w-[45%] lg:w-[22%] items-center justify-center">
            <div
              className="flex flex-col gap-2 w-32 h-32 sm:w-40 sm:h-40 rounded-full items-center justify-center"
              style={{
                backgroundImage: "url('/images/mask.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white font-medium capitalize">phase 2</p>
              <p className="text-white font-medium capitalize">q2 2025</p>
            </div>
            <div className="flex min-h-[200px] flex-col gap-2 mt-4 border-solid bg-black border-4 border-red-600 w-full p-4 rounded-md shadow-md">
              <p className="text-white font-semibold capitalize text-2xl">hype</p>
              <li className="text-white font-normal">Build Community</li>
              <li className="text-white font-normal">Host Events & Airdrops</li>
              <li className="text-white font-normal">Foster Partnerships</li>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="flex flex-col gap-10 w-full md:w-[45%] lg:w-[22%] items-center justify-center">
            <div
              className="flex flex-col gap-2 w-32 h-32 sm:w-40 sm:h-40 rounded-full items-center justify-center"
              style={{
                backgroundImage: "url('/images/mask.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white font-medium capitalize">phase 3</p>
              <p className="text-white font-medium capitalize">q3 - q4 2025</p>
            </div>
            <div className="flex min-h-[200px] flex-col gap-2 mt-4 border-solid bg-black border-4 border-red-600 w-full p-4 rounded-md shadow-md">
              <p className="text-white font-semibold capitalize text-2xl">launch</p>
              <li className="text-white font-normal">REDFWOG token launch</li>
              <li className="text-white font-normal">Incentivise Contributors</li>
              <li className="text-white font-normal">Activate Cold Staking</li>
              <li className="text-white font-normal">Launch RedFwog NFTs</li>
              <li className="text-white font-normal">Activate Community Governance</li>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="flex flex-col md:flex-col-reverse gap-10 w-full md:w-[45%] lg:w-[22%] items-center justify-center">
            <div
              className="flex flex-col gap-2 w-32 h-32 sm:w-40 sm:h-40 rounded-full items-center justify-center"
              style={{
                backgroundImage: "url('/images/mask.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white font-medium capitalize">phase 4</p>
              <p className="text-white font-medium capitalize">q1 - q2 2026</p>
            </div>
            <div className="flex min-h-[200px] flex-col gap-2 mt-4 border-solid bg-black border-4 border-red-600 w-full p-4 rounded-md shadow-md">
              <p className="text-white font-semibold capitalize text-2xl">scale</p>
              <li className="text-white font-normal">Expand NFT utility</li>
              <li className="text-white font-normal">Expand NFT utility</li>
              <li className="text-white font-normal">Pursue major partnerships</li>
              <li className="text-white font-normal">Grow the DAO Treasury</li>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
