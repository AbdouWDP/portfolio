import { LuLayoutGrid } from "react-icons/lu";

function MobileNavbar() {
  return (
    <header className="mobile-navbar h-16 sticky top-0 bg-white shadow-md z-50">
      <div className="w-11/12 h-full m-auto flex justify-between items-center text-title text-xl font-bold">
        <div>
          <p>AWDP</p>
        </div>
        <div>
          <button className="text-2xl">
            <span>
              <LuLayoutGrid />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default MobileNavbar;
