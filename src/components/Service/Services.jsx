import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="mx-auto max-w-7xl my-20">
      <div className=" grid grid-cols-1 px-4 md:grid-cols-2 my-4">
        <div className="flex flex-col py-4">
          <h5 className="text-[#02fafe] text-2xl text-center md:text-left tracking-wide">
            Our Services
          </h5>
          <p className="text-white text-center md:text-left font-bold text-4xl tracking-wider mt-2">
            Get World Class & Fastest <br /> Online Payment Services
          </p>
        </div>
        <div className="flex flex-col justify-center py-4">
          <p className="text-gray-400 font-normal text-center md:text-left  tracking-wider mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            accusantium, vero quas omnis velit debitis quos, dolor voluptatibus
            modi magnam hic possimus, delectus fuga recusandae cumque eligendi
            eos
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
        <div className="bg-[#0b0d33] hover:bg-[#142a5c] flex flex-col justify-between  border border-[#94f2fc48] space-y-4 h-52 rounded-lg p-6">
          <h3 className="text-white uppercase font-semibold text-xl">
            <i class="fa-solid fa-money-check-dollar text-[#09acbd] mr-4"></i>
            Payment Gateway
          </h3>
          <p className="text-gray-500 font-medium">
            Elevate your business with our robust and efficient payment
            processing solution.
          </p>
          <div>
            <Link to="#" className="text-white">
              Learn More <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </Link>
          </div>
        </div>
        <div className="bg-[#0b0d33] hover:bg-[#142a5c] flex flex-col justify-between  border border-[#94f2fc48] space-y-4 h-52 rounded-lg p-6">
          <h3 className="text-white uppercase font-semibold text-xl">
            <i class="fa-solid fa-retweet text-[#09acbd] mr-4"></i>
            Subscription-Based Payments
          </h3>
          <p className="text-gray-500 font-medium">
            Seamlessly manage recurring transactions with our flexible
            subscription payment system.
          </p>
          <div>
            <Link to="#" className="text-white">
              Learn More <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </Link>
          </div>
        </div>
        <div className="bg-[#0b0d33] hover:bg-[#142a5c] flex flex-col justify-between  border border-[#94f2fc48] space-y-4 h-52 rounded-lg p-6">
          <h3 className="text-white uppercase font-semibold text-xl">
            <i class="fa-solid fa-file-shield  text-[#09acbd] mr-4"></i>
            Safe & Secure
          </h3>
          <p className="text-gray-500 font-medium">
            Trust in our top-tier security protocols to ensure the safety of
            every transaction.
          </p>
          <div>
            <Link to="#" className="text-white">
              Learn More <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </Link>
          </div>
        </div>
        <div className="bg-[#0b0d33] hover:bg-[#142a5c] flex flex-col justify-between  border border-[#94f2fc48] space-y-4 h-52 rounded-lg p-6">
          <h3 className="text-white uppercase font-semibold text-xl">
            <i class="fa-solid fa-money-bill text-[#09acbd] mr-4"></i>
            Payment Link
          </h3>
          <p className="text-gray-500 font-medium">
            Simplify transactions with customizable payment links for easy and
            quick payments.
          </p>
          <div>
            <Link to="#" className="text-white">
              Learn More <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </Link>
          </div>
        </div>
        <div className="bg-[#0b0d33] hover:bg-[#142a5c] flex flex-col justify-between  border border-[#94f2fc48] space-y-4 h-52 rounded-lg p-6">
          <h3 className="text-white uppercase font-semibold text-xl">
            <i class="fa-solid fa-file-invoice-dollar text-[#09acbd] mr-4"></i>
            payment invoice
          </h3>
          <p className="text-gray-500 font-medium">
            Create and send professional invoices, streamlining your billing
            process effortlessly.
          </p>
          <div>
            <Link to="#" className="text-white">
              Learn More <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </Link>
          </div>
        </div>
        <div className="bg-[#0b0d33] hover:bg-[#142a5c] flex flex-col justify-between  border border-[#94f2fc48] space-y-4 h-52 rounded-lg p-6">
          <h3 className="text-white uppercase font-semibold text-xl">
            <i class="fa-solid fa-headset text-[#09acbd] mr-4"></i>
            support
          </h3>
          <p className="text-gray-500 font-medium">
            Dedicated support at every step, ensuring a smooth experience for
            you and your customers.
          </p>
          <div>
            <Link to="#" className="text-white">
              Learn More <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
