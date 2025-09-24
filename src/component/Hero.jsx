import heroImg from "../assets/banner-main.png"

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-10">
      <div className="bg-black rounded-2xl">
        <div className="hero h-fit sm:h-[500px] rounded-2xl flex flex-col justify-center gap-6 text-center p-5">
          <img className="w-[160px] sm:w-auto" src={heroImg} alt="" />
          <h2 className="text-xl sm:text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className="text-sm sm:text-2xl font-medium text-white">Beyond Boundaries Beyond Limits</p>
          <div className="border border-amber-300 rounded-xl p-1">
            <button className="bg-amber-300 rounded-xl text-base font-medium px-5 py-2 cursor-pointer">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
