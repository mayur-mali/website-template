import React from "react";
import GetStartedButton from "../Button/GetStartedButton";

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl my-20">
      <div className="pt-8 overflow-hidden sm:py-12">
        <div className="mx-auto  max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[37rem] w-full object-cover rounded-lg"
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
                  Edviron's payment gateway redefines efficiency in fee
                  collection for schools. Seamlessly secure, it empowers
                  educational institutions with real-time tracking and
                  user-friendly interfaces, simplifying financial management
                </p>
              </div>
              <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Secure Transactions Always
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Real-Time Payment Tracking
                  </p>
                </div>

                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">User-Friendly Interface</p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Customizable Fee Structures
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Automated Financial Reports
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">Diverse Payment Options</p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Effortless Reconciliation
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Responsive Customer Support
                  </p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">Transparent Fee Details</p>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 flex-none rounded-full bg-white flex justify-center items-center">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-gray-500 ml-3">
                    Seamless Subscription Management
                  </p>
                </div>
              </div>
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
