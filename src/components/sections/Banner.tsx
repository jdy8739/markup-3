const Banner = () => {
  return (
    <section className="px-[2rem]">
      <div className="flex flex-col gap-[3.75rem]">
        <div className="text-center flex flex-col gap-[1rem]">
          <p className="text-[1.38rem] text-[#FA1D1D] leading-[1.5] tracking-[0.16em]">PLAN YOUR TRIP NOW</p>
          <h2 className="font-bold text-[#011222] text-[3.25rem] leading-[1.15] font-atkinson">
            EXPLORE THE WORLD WITH US
          </h2>
        </div>
        <div className="flex items-center gap-[2.50rem] justify-center">
          <button className="bg-[#FF9D29] text-white font-bold py-[0.94rem] px-[2rem] clip-custom">Book A Ride</button>
          <span className="text-[#5B6B7A] text-[1.25rem]">OR</span>
          <button className="size-[3.25rem] border-1 border-[#FF9D29] rounded-full overflow-hidden">
            <span className="w-full h-full inline-block bg-[#FF9D29] opacity-20" />
          </button>
        </div>
      </div>

      <div>
        <div className="flex">
          <div>WHAT'S NEW</div>
          <div />
        </div>
        <p>Now You Can Rent A Car With The Various Facilities And Conveniences We Provide.</p>
      </div>
      <div>
        <div>{'image'}</div>
        <dl>
          <div>
            <dt>CAR RENTED</dt>
            <dd>240</dd>
          </div>
          <div>
            <dt>SATISFIED CLIENTS</dt>
            <dd>235</dd>
          </div>
          <div>
            <dt>YEARS EXPERIENCE</dt>
            <dd>240</dd>
          </div>
          <div>
            <dt>CAR TYPES</dt>
            <dd>180</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Banner;
