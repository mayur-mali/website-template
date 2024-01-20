import React from "react";

function Counter() {
  return (
    <div className="max-w-7xl mx-auto text-center  grid grid-cols-1 md:gap-2 gap-y-4 md:grid-cols-2 xl:grid-cols-4">
      <div className=" h-20 md:border-r-4 border-[#02fafe] ">
        <p className="text-4xl text-white font-bold tracking-widest">3,800+</p>
        <p className="text-lg mt-2 text-[#01deed] font-medium">Users Active</p>
      </div>
      <div className=" h-20 xl:border-r-4 border-[#02fafe] ">
        <p className="text-4xl text-white font-bold tracking-widest">150+</p>
        <p className="text-lg mt-2 text-[#01deed] font-medium">
          Trusted Companies
        </p>
      </div>
      <div className=" h-20 md:border-r-4 border-[#02fafe] ">
        <p className="text-4xl text-white font-bold tracking-widest">$260M+</p>
        <p className="text-lg mt-2 text-[#01deed] font-medium">
          Total Transactions
        </p>
      </div>
      <div className=" h-20 ">
        <p className="text-4xl text-white font-bold tracking-widest">198K+</p>
        <p className="text-lg mt-2 text-[#01deed] font-medium">
          Registered Investors
        </p>
      </div>
    </div>
  );
}

export default Counter;
