import ClipButton from '@components/atoms/buttons/ClipButton';
import banner from '@assets/images/banner.jpg';

const Banner = () => {
  return (
    <section className="flex flex-col gap-[3.75rem]">
      <div className="px-[2rem] flex flex-col gap-[6.25rem]">
        <div className="flex flex-col gap-[3.75rem]">
          <div className="text-center flex flex-col gap-[1rem]">
            <p className="text-[1.38rem] text-[#FA1D1D] leading-[1.5] tracking-[0.16em]">PLAN YOUR TRIP NOW</p>
            <h2 className="font-bold text-[#011222] text-[3.25rem] leading-[1.15] font-atkinson">
              EXPLORE THE WORLD WITH US
            </h2>
          </div>
          <div className="flex items-center gap-[2.50rem] justify-center">
            <ClipButton>Book A Ride</ClipButton>
            <span className="text-[#5B6B7A] text-[1.25rem]">OR</span>
            <button className="size-[3.25rem] border-1 border-[#FF9D29] rounded-full overflow-hidden">
              <span className="w-full h-full inline-block bg-[#FF9D29] opacity-20" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[1.25rem]">
          <div className="flex items-center gap-[1.5rem]">
            <div className="text-[#FA1D1D] font-atkinson text-[1.50rem] leading-[1.21]">WHAT'S NEW</div>
            <div className="h-[2px] flex-1 border-b-2 border-[#FA1D1D] border-dashed" />
          </div>
          <p className="text-[1rem] leading-[1.5] text-[#5B6B7A]">
            Now You Can Rent A Car With The Various Facilities And Conveniences We Provide.
          </p>
        </div>
      </div>
      <div>
        <div className="h-[32.50rem] relative">
          <img src={banner} alt="banner" className="h-full object-cover object-bottom-left" />
          <div className="absolute bottom-0 right-0 w-[19.44rem] h-[8.69rem] bg-[#020920]" />
        </div>
        <dl
          className="
          h-[23.25rem]
          bg-[#020920]
          px-[2rem]
          py-[3.75rem]
          text-white
          grid
          grid-cols-2
          grid-rows-2
          gap-[3.75rem]
          text-center
          "
        >
          <div className="flex flex-col justify-between">
            <dt>CAR RENTED</dt>
            <dd className="font-atkinson text-[3.25rem]">240</dd>
          </div>
          <div className="text-[#FF9D29]">
            <dt>SATISFIED CLIENTS</dt>
            <dd className="font-atkinson text-[3.25rem]">235</dd>
          </div>
          <div>
            <dt>YEARS EXPERIENCE</dt>
            <dd className="font-atkinson text-[3.25rem]">240</dd>
          </div>
          <div>
            <dt>CAR TYPES</dt>
            <dd className="font-atkinson text-[3.25rem]">180</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Banner;
