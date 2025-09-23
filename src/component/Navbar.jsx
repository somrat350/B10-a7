import logoImg from "../assets/logo.png"
import coinImg from "../assets/dollar-1.png"

export default function Navbar({balance}) {
  return (
    <header className="max-w-7xl mx-auto px-5 shadow-xl sticky top-0 bg-white">
      <div className="navbar">
        <div className="flex-1">
          <img src={logoImg} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu flex items-center gap-8 menu-horizontal px-1 text-gray-500 text-base">
            <div className="flex items-center gap-1 text-black font-semibold">
              <span>{balance} Coin</span>
              <img className="w-5 h-5" src={coinImg} alt="" />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
