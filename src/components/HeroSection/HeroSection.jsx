import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter.jsx";
import statitics from "../../assets/2910221_509.png";
import GetStartedButton from "../Button/GetStartedButton.jsx";
function HeroSection() {
  return (
    <>
      <div>
        <div className="pb-8 sm:pb-12 lg:pb-12">
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mt-20 space-y-8">
                  <div className="bg-[#1d2256] max-w-fit md:mx-0 mx-auto px-4 py-2 rounded-lg ">
                    <p className="text-white font-normal">
                      25% Discount on this account
                    </p>
                  </div>
                  <div className="mt-6 sm:max-w-xl md:text-left text-center space-y-3">
                    <h1 className="text-4xl font-medium text-white tracking-wider sm:text-5xl">
                      Edviron
                      <span className="text-[#02fafe]"> Seamless</span>{" "}
                    </h1>
                    <h1 className="text-4xl  font-medium text-white tracking-wider sm:text-5xl">
                      {" "}
                      Transactions, Secure Payments
                    </h1>
                  </div>
                  <p className="mt-6 text-xl text-gray-500 md:text-left text-center">
                    Empowering Your Business with Next-Level Payment Solutions.
                  </p>
                  <div className="flex items-center md:justify-start justify-center">
                    <GetStartedButton />
                    <Link to="#" className="text-white ml-4">
                      Learn More{" "}
                      <i className="fa-solid fa-angle-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                  <img
                    src={statitics}
                    alt="statitics"
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
