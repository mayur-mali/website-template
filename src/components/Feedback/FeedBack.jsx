import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
function FeedBack() {
  return (
    <div className="mx-auto max-w-7xl my-20">
      <div className=" grid grid-cols-1 px-4 md:grid-cols-2 my-4">
        <div className="flex flex-col py-4">
          <h5 className="text-[#02fafe] text-2xl text-center md:text-left tracking-wide">
            Feedback
          </h5>
          <p className="text-white text-center md:text-left font-bold text-4xl tracking-wider mt-2">
            Happy Customer, More <br /> Good Review
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
      <div className="px-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-[#0b0d33] hover:bg-[#142a5c] border border-[#94f2fc48] rounded">
              <section>
                <div className=" md:flex md:flex-col p-8 md:border-r md:border-indigo-900">
                  <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                      </svg>
                      <p className="relative">
                        "Edviron's payment gateway has revolutionized our fee
                        collection process. Efficient, secure, and incredibly
                        user-friendly. Our parents appreciate the convenience it
                        brings.
                      </p>
                    </div>
                    {/*<footer className="mt-8">
                      <div className="flex">
                        <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                          <img
                            className="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-white"></div>
                        </div>
                      </div>
        </footer>*/}
                  </blockquote>
                </div>
              </section>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0b0d33] hover:bg-[#142a5c] border border-[#94f2fc48] rounded">
              <section>
                <div className=" md:flex md:flex-col p-8 md:border-r md:border-indigo-900">
                  <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                      </svg>
                      <p className="relative">
                        Using Edviron's payment gateway has significantly
                        reduced our administrative burden. The system is robust,
                        and the support from their team is commendable. A
                        game-changer for us!
                      </p>
                    </div>
                  </blockquote>
                </div>
              </section>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0b0d33] hover:bg-[#142a5c] border border-[#94f2fc48] rounded">
              <section>
                <div className=" md:flex md:flex-col p-8 md:border-r md:border-indigo-900">
                  <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                      </svg>
                      <p className="relative">
                        We've had a fantastic experience with Edviron's payment
                        gateway. The interface is intuitive, and the real-time
                        tracking features provide valuable insights. Highly
                        recommended!
                      </p>
                    </div>
                  </blockquote>
                </div>
              </section>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#0b0d33] hover:bg-[#142a5c] border border-[#94f2fc48] rounded">
              <section>
                <div className=" md:flex md:flex-col p-8 md:border-r md:border-indigo-900">
                  <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                      </svg>
                      <p className="relative">
                        Edviron's payment gateway has streamlined our financial
                        operations. It's reliable, secure, and the detailed
                        reporting features help us stay organized. An excellent
                        solution for schools
                      </p>
                    </div>
                  </blockquote>
                </div>
              </section>
            </div>
          </SwiperSlide>

          <div className="flex justify-end items-center gap-x-4 mt-4">
            <div className="swiper-button-prev w-8 h-8 cursor-pointer flex justify-center items-center bg-[#142a5c] hover:bg-[#02fafe] hover:bg-opacity-70 border border-[#94f2fc48] hover:text-white rounded-full">
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="swiper-button-next w-8 h-8 cursor-pointer flex justify-center items-center bg-[#142a5c] hover:bg-[#02fafe] hover:bg-opacity-70 border border-[#94f2fc48] hover:text-white rounded-full">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default FeedBack;
