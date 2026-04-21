import Container from "../Container";
import LimitedOne from "../../assets/limitedOne.jpg";
import LimitedTwo from "../../assets/limitedTwo.jpg";
import LimitedThree from "../../assets/limitedThree.jpg";
import LimitedFour from "../../assets/limitedFour.jpg";
import LimitedFive from "../../assets/limitedFive.jpg";
import LimitedEditionCard from "../LimitedEditionCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

const LimitedEdition = () => {
  const products = [
    {
      img: LimitedOne,
      title: "Basic Crew Neck Tee",
      price: "$44.00",
      color: "Gray",
    },
    {
      img: LimitedTwo,
      title: "Urban Street Hoodie",
      price: "$59.00",
      color: "Black",
    },
    {
      img: LimitedThree,
      title: "Classic Cotton Tee",
      price: "$39.00",
      color: "White",
    },
    {
      img: LimitedFour,
      title: "Premium Sweatpants",
      price: "$65.00",
      color: "Navy Blue",
    },
    {
      img: LimitedFive,
      title: "Designer Jacket",
      price: "$89.00",
      color: "Olive Green",
    },
  ];

  return (
    <section className="bg-black pt-10 lg:pt-16 pb-20 px-3 lg:px-0 overflow-hidden">
      <Container>
        {/* HEADER + ARROWS */}
        <div className="relative mb-10 lg:mb-16">
          <h2 className="text-center text-4xl font-medium text-white">
            Limited Edition
          </h2>

          {/* CUSTOM ARROWS (LARGE ONLY) */}
          <div className="hidden lg:flex gap-3 absolute right-0 top-1/2 -translate-y-1/2">
            <button className="limited-prev w-9 h-9 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              ‹
            </button>
            <button className="limited-next w-9 h-9 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              ›
            </button>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".limited-next",
            prevEl: ".limited-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((product, idx) => (
            <SwiperSlide key={`limited-edition-${idx}`}>
              <div className="px-2">
                <LimitedEditionCard
                  imgSrcFirst={product.img}
                  imgAlt={product.title}
                  title={product.title}
                  price={product.price}
                  productColor={product.color}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default LimitedEdition;
