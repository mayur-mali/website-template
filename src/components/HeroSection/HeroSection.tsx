import React from "react";

function HeroSection() {
  return (
    <>
      <div>
        <div className="pb-8 sm:pb-12 lg:pb-12">
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mt-20">
                  <div className="bg-[#1d2256] max-w-fit px-4 py-2 rounded-lg ">
                    <p className="text-white font-normal">
                      25% Discount on this account
                    </p>
                  </div>
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-medium text-white tracking-wide sm:text-5xl">
                      Everpay
                      <span className="text-[#02fafe]"> Easy Payment</span>{" "}
                      <br />
                      Gateway Solution.
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                  <img
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
