import logo from '@assets/svgs/logo.svg';
import menu from '@assets/svgs/menu.svg';
import close from '@assets/svgs/close.svg';
import Menu from '@components/layout/Menu';
import { useCallback, useEffect, useRef, useState } from 'react';

const MENU_LIST: readonly string[] = ['HOME', 'ABOUT US', 'VEHICLES', 'FEATURES'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [chosenMenu, setChosenMenu] = useState('');

  const timeoutRef = useRef<number>(null);

  const currentScrollYRef = useRef(0);

  // focus되었을 때만 키보드 이벤트를 감지할 수 있음
  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Escape') {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const main = document.querySelector('main')!;

    if (isMenuOpen) {
      timeoutRef.current = setTimeout(() => {
        currentScrollYRef.current = window.scrollY;

        main.style.height = '100dvh';
        main.style.overflow = 'hidden';
      }, 300);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      main.style.height = 'auto';
      main.style.overflow = 'auto';

      if (currentScrollYRef.current) {
        window.scrollTo({ top: currentScrollYRef.current });
      }
      currentScrollYRef.current = 0;
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const header = document.querySelector('header')!;

    const outsideClickCallback = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!header.contains(target)) {
        setChosenMenu('');
      }
    };

    window.addEventListener('click', outsideClickCallback);

    return () => {
      window.removeEventListener('click', outsideClickCallback);
    };
  }, []);

  return (
    <header className="fixed z-2 w-full bg-[#F2F4F9]">
      <nav className="flex justify-between items-center p-[2rem] md:px-[4rem] lg:px-[7.50rem]">
        <div className="flex items-center gap-[0.75rem]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="font-atkinson text-[1.88rem] leading-[1.21]">DRIVEWAYS</div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex leading-[1.21] gap-[3rem]">
            {MENU_LIST.map((el) => (
              <li key={el} className={`relative ${chosenMenu === el ? 'text-[#FF9D29]' : 'text-[#BDBDBD]'}`}>
                <button onClick={() => setChosenMenu(el)}>{el}</button>
                {chosenMenu === el && (
                  <div
                    className="
                    absolute
                    bg-white
                    p-[2rem]
                    mt-[1rem]
                    shadow-lg shadow-gray-300-500/50
                    "
                  >
                    <ul
                      className="
                      font-semibold
                      leading-[1.21]
                      flex flex-col gap-[2rem]
                      w-max
                      "
                    >
                      <li>HOME PAGE 01</li>
                      <li className="text-[#BDBDBD]">HOME PAGE 02</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="font-bold text-[1.25rem] text-[#BDBDBD]">Contact Us</button>
        </div>
        <div className="flex items-center lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} onKeyDown={onKeyDown} className="focus:outline-none">
            {isMenuOpen ? <img src={close} alt="close-menu" /> : <img src={menu} alt="menu" />}
          </button>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
