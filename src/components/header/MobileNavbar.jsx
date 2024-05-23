import { GrIndicator } from "react-icons/gr";

function MobileNavbar() {
  return (
    <header className="mobile-navbar h-10 sticky top-0">
      <div className="w-11/12 h-full m-auto flex justify-between items-center text-title text-xl font-bold">
        <div>
          <p>AWDP</p>
        </div>
        <div>
          <span>
            <GrIndicator />
          </span>
        </div>
      </div>
    </header>
  );
}

export default MobileNavbar;
