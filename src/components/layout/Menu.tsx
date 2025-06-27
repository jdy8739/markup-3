import ClipButton from '@components/atoms/buttons/ClipButton';
import { useEffect } from 'react';

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  useEffect(() => {
    const aside = document.querySelector('aside')!;

    aside.scrollTo({ top: 0 });
  }, [isOpen]);
  return (
    <aside
      className={`
        bg-[#F2F4F9]
        p-[2rem]
        h-[calc(100dvh-6.25rem)]
        w-[100dvw]
        fixed
        left-0
        transition-transform
        duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-[100%]'}
        overflow-y-scroll
        flex flex-col gap-[3.75rem]
        `}
    >
      <div>
        <ul className="flex flex-col gap-[2.50rem]">
          <li className="flex flex-col gap-[1rem]">
            <div className="font-atkinson text-[#FA1D1D] text-[1.25rem] leading-[1.3]">HOME PAGE</div>
            <ul className="flex flex-col gap-[1.50rem]">
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">HOME PAGE 01</li>
              <li className="font-semibold leading-[1.21] text-[#FF9D29]">HOME PAGE 02</li>
            </ul>
          </li>
          <li>
            <div className="font-atkinson text-[#BDBDBD] text-[1.25rem] leading-[1.3]">ABOUT US</div>
          </li>
          <li className="flex flex-col gap-[1rem]">
            <div className="font-atkinson text-[#BDBDBD] text-[1.25rem] leading-[1.3]">VEHICLES</div>
            <ul className="flex flex-col gap-[1.50rem]">
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">SAMPLE 01</li>
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">SAMPLE 02</li>
            </ul>
          </li>
          <li className="flex flex-col gap-[1rem]">
            <div className="font-atkinson text-[#BDBDBD] text-[1.25rem] leading-[1.3]">FEATURES</div>
            <ul className="flex flex-col gap-[1.50rem]">
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">TESTIMONIALS</li>
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">OUR TEAM</li>
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">BLOG</li>
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">BLOG DETAIL</li>
              <li className="font-semibold leading-[1.21] text-[#BDBDBD]">404 PAGE</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <ClipButton>Contact US</ClipButton>
      </div>
    </aside>
  );
};

export default Menu;
