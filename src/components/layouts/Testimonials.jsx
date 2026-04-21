import React from "react";
import TestimoniCard from "../TestimoniCard";
import TestimoniOne from "../../assets/testimoniOne.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import Container from "../Container";

const Testimonials = () => {
  return (
    <div className="my-10 lg:my-15 overflow-hidden">
      <Container>

        {/* HEADER SECTION */}
        <div className="relative w-[98%] m-auto mb-6">

          {/* CENTER TITLE */}
          <h3 className="text-center text-4xl font-medium">
            Testimonials
          </h3>

          {/* ARROWS (TOP RIGHT - LARGE ONLY) */}
          <div className="hidden lg:flex gap-3 absolute right-0 top-1/2 -translate-y-1/2">
            <button className="testi-prev w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition">
              ‹
            </button>
            <button className="testi-next w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition">
              ›
            </button>
          </div>

        </div>

        {/* SLIDER */}
        <div className="w-[98%] m-auto">

          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            navigation={{
              nextEl: ".testi-next",
              prevEl: ".testi-prev",
            }}
            className="pb-10"
          >
            <SwiperSlide>
              <TestimoniCard
                TestiHeading={"Testimonials"}
                TestiParagraph={
                  "“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “"
                }
                TestiDetails={"Helena Gibbson, 06 April 2020"}
                imgSrc={TestimoniOne}
                imgAlt={"Testimoni clint Image"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimoniCard
                TestiHeading={"Testimonials"}
                TestiParagraph={
                  "“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “"
                }
                TestiDetails={"Helena Gibbson, 06 April 2020"}
                imgSrc={TestimoniOne}
                imgAlt={"Testimoni clint Image"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimoniCard
                TestiHeading={"Testimonials"}
                TestiParagraph={
                  "“ Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in. Hendrerit viverra elementum venenatis pellentesque pellentesque ornare “"
                }
                TestiDetails={"Helena Gibbson, 06 April 2020"}
                imgSrc={TestimoniOne}
                imgAlt={"Testimoni clint Image"}
              />
            </SwiperSlide>

          </Swiper>
        </div>

      </Container>
    </div>
  );
};

export default Testimonials;