import logo from '@assets/svgs/logo.svg';
import menu from '@assets/svgs/menu.svg';

const Header = () => {
  return (
    <header className="fixed z-1 w-full bg-[#F2F4F9]">
      <nav className="flex justify-between p-[2rem]">
        <div className="flex items-center gap-[0.75rem]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="font-atkinson text-[1.88rem] leading-[1.21]">DRIVEWAYS</div>
        </div>
        <div className="flex items-center">
          <button>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
