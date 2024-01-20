import React from "react";

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl my-20">
      <div className="pt-8 overflow-hidden sm:py-12">
        <div className="mx-auto  max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
              className="h-[500px] w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h5 className="text-[#02fafe] text-2xl text-center md:text-left tracking-wide">
                  About Company
                </h5>
                <p className="text-white text-center capitalize md:text-left font-bold text-3xl tracking-wider">
                  help Every phase of your <br /> bussiness grow
                </p>
                <p className="text-gray-500 font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  nemo aliquid, illo maxime inventore dolorem nisi ratione
                  labore accusamus incidunt quibusdam dolore vero vel eum
                  recusandae voluptatem quo? Quia, incidunt.
                </p>
              </div>
              <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="px-6 py-2 bg-[#02fafe] rounded-lg text-black tracking-wide font-bold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
