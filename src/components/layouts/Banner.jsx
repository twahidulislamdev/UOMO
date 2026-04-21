import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import SliderOne from "../../assets/sliderOne.png";
import SliderTwo from "../../assets/sliderTwo.png";
import { Link } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  // Slides data (avoids repeating code)
  const slides = [
    { id: 1, img: SliderOne, title: "The Classics" },
    { id: 2, img: SliderTwo, title: "New Arrivals" },
  ];

  return (
    <div className="w-[96%] m-auto lg:px-10 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mb-13">
              <Container>
                <Flex className="flex-col-reverse lg:flex-row items-center justify-between gap-6">
                  {/* Text Section */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <Heading
                      className="text-3xl lg:text-7xl font-medium"
                      txt={slide.title}
                      as="h1"
                    />
                    <p className="mt-2 text-sm text-mainColor">
                      An exclusive selection of this season's trends.
                    </p>
                    <Link to="/shop">
                      <button className="relative mt-5 text-sm sm:text-base font-medium pb-2 group">
                        <span className="group-hover:text-black transition-colors duration-300">
                          DISCOVER NOW
                        </span>
                        <span className="absolute left-0 bottom-0 h-0.5 bg-black w-1/3 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                      </button>
                    </Link>
                  </div>

                  {/* Image Section (FIXED SIZE) */}
                  <div className="w-[70%] lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-[420px] aspect-[4/5] overflow-hidden">
                      <Image
                        className="w-full h-full object-contain"
                        imgSrc={slide.img}
                        imgAlt="Fashion item"
                      />
                    </div>
                  </div>
                </Flex>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;