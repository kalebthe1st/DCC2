import React from "react";
const Home = () => {
  return (
    <>
      {/* +++++++++ hero section ++++++++ */}

      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ========= hero content+++++++++ */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help you connect with Everyone
                  </h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi quae iure ab velit voluptate saepe vitae
                    repudiandae porro omnis iste.
                  </p>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};
export default Home;
