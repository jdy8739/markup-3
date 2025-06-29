import ClipButton from '@components/atoms/buttons/ClipButton';
import banner from '@assets/images/banner.jpg';
import minicar from '@assets/images/mini-car.png';

const Banner = () => {
  return (
    <section className="flex flex-col bg-[#F2F4F9] pt-[9.25rem] lg:pt-[6.5rem]">
      <div className="absolute h-dvh w-full lg:w-1/2 overflow-x-hidden">
        <div
          className="
          absolute left-[-10rem] top-[12rem]
          lg:top-[25rem]
          size-[30rem]
          bg-[radial-gradient(15rem_at_center,_#4C6ACA,_rgba(76,106,202,0))]
          opacity-20"
        />
        <div
          className="
          absolute right-[-15rem] top-[-1.5rem]
          lg:top-[5rem]
          size-[30rem]
          bg-[radial-gradient(15rem_at_center,_#4C6ACA,_rgba(76,106,202,0))]
          opacity-20"
        />
      </div>

      <div className="flex flex-col gap-[3.75rem] lg:flex-row lg:gap-0 z-1">
        <div className="px-[2rem] flex flex-col gap-[6.25rem] md:px-[4rem] lg:w-1/2 lg:px-[7.50rem_0] lg:justify-center">
          <div className="flex flex-col gap-[3.75rem]">
            <div className="text-center flex flex-col gap-[1rem] lg:text-left">
              <p className="text-[1.38rem] text-[#FA1D1D] leading-[1.5] tracking-[0.16em]">PLAN YOUR TRIP NOW</p>
              <h2 className="font-bold text-[#011222] text-[3.25rem] leading-[1.15] font-atkinson lg:text-[6.13rem]">
                EXPLORE THE WORLD WITH US
              </h2>
            </div>
            <div
              className="
              flex
              items-center
              gap-[2.50rem]
              justify-center
              lg:justify-start
              text-[1.25rem]
              lg:text-[1.5rem]
              "
            >
              <ClipButton className="text-[1rem] lg:text-[1.25rem]">Book A Ride</ClipButton>
              <span className="text-[#5B6B7A]">OR</span>
              <button className="size-[3.25em] border-1 border-[#FF9D29] rounded-full overflow-hidden">
                <span className="w-full h-full inline-block bg-[#FF9D29] opacity-20" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[1.25rem] lg:pr-[7.50rem]">
            <div className="flex items-center gap-[1.5rem]">
              <div className="text-[#FA1D1D] font-atkinson text-[1.50rem] leading-[1.21]">WHAT'S NEW</div>
              <div className="h-[2px] flex-1 border-b-2 border-[#FA1D1D] border-dashed" />
            </div>
            <p className="text-[1.13rem] leading-[1.5] text-[#5B6B7A]">
              Now You Can Rent A Car With The Various Facilities And Conveniences We Provide.
            </p>
          </div>
        </div>

        <div className="h-[32.50rem] lg:h-[52.38rem] lg:w-1/2 relative">
          <img src={banner} alt="banner" className="w-full h-full object-cover object-bottom-left" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute bottom-full right-0 w-[19.44rem] h-[8.69rem] bg-[#020920] px-[2rem_0] py-[2rem] top-left-clip">
          <div className="absolute w-[11.63rem]">
            <p className="font-atkinson text-[1.13rem] text-white leading-[1.31]">
              GET <span className="text-[#FA1D1D] text-[1.25rem]">10%</span> OFF FOR FAMILY CAR
              <br />
              TYPE
            </p>
          </div>
          <div className="w-[10.13rem] h-[7.13rem] overflow-visible absolute right-0">
            <img src={minicar} alt="minicar" className="h-full object-cover object-left" />
          </div>
        </div>
        <dl
          className="
          h-[23.25rem]
          lg:h-[14.81rem]
          bg-[#020920]
          px-[2rem]
          py-[3.75rem]
          text-white
          grid
          grid-cols-2
          grid-rows-2
          gap-[3.75rem]
          text-center
          md:gap-[3.75rem_9.00rem]
          md:px-[9rem]
          lg:flex
          lg:gap-0
          lg:justify-between
          lg:items-center
          lg:px-[7.44rem]
          "
        >
          <div>
            <dt className="md:text-[1.13rem]">CAR RENTED</dt>
            <dd className="font-atkinson text-[3.25rem] md:text-[4.38rem] md:leading-[1.1]">240</dd>
          </div>
          <div className="text-[#FF9D29]">
            <dt className="md:text-[1.13rem]">SATISFIED CLIENTS</dt>
            <dd className="font-atkinson text-[3.25rem] md:text-[4.38rem] md:leading-[1.1]">235</dd>
          </div>
          <div>
            <dt className="md:text-[1.13rem]">YEARS EXPERIENCE</dt>
            <dd className="font-atkinson text-[3.25rem] md:text-[4.38rem] md:leading-[1.1]">12+</dd>
          </div>
          <div>
            <dt className="md:text-[1.13rem]">CAR TYPES</dt>
            <dd className="font-atkinson text-[3.25rem] md:text-[4.38rem] md:leading-[1.1]">18</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Banner;
