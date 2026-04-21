import React from "react";
import Container from "../Container";
import Flex from "../Flex";

import ProductOne from "../../assets/productOne.jpg";
import ProductOneSide from "../../assets/productOneSide.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductTwoSide from "../../assets/productTwoSide.jpg";
import ProductThree from "../../assets/productThree.jpg";
import ProductThreeSide from "../../assets/productThreeSide.jpg";
import ProductFour from "../../assets/productFour.jpg";
import ProductFourSide from "../../assets/productFourSide.jpg";
import ProductFive from "../../assets/productFive.jpg";
import ProductFiveSide from "../../assets/productFiveSide.jpg";
import ProductSix from "../../assets/productSix.jpg";
import ProductSixSide from "../../assets/productSixSide.jpg";
import ProductSeven from "../../assets/productSeven.jpg";
import ProductSevenSide from "../../assets/productSevenSide.jpg";
import ProductEight from "../../assets/productEight.jpg";
import ProductEightSide from "../../assets/productEightSide.jpg";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import ProductCard from "../ProductCard";

const Trending = () => {
  return (
    <div className="w-[96%] m-auto flex justify-center px-0 lg:px-0  lg:mt-0 py-10 lg:py-10 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Trending
          </h3>

          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mt-5">
            {["ALL", "WOMEN", "MAN", "KIDS"].map((item, idx) => (
              <li
                key={idx}
                className="relative group px-2 py-1 text-sm md:text-base font-medium text-seconderyColor hover:text-mainColor cursor-pointer"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Slider + Arrows Section */}
        <div className="mt-10 relative">
          {/* NAVIGATION BUTTONS (ONLY LARGE DEVICE) */}
          <div className="hidden lg:flex gap-3 absolute right-0 -top-12 z-10">
            <button className="trending-prev w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition">
              ‹
            </button>
            <button className="trending-next w-9 h-9 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition">
              ›
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".trending-next",
              prevEl: ".trending-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductOne}
                imgAlt="Arive One"
                imgSrcSide={ProductOneSide}
                badgeText="New"
                title="Cropped Faux Leather Jacket"
                price={29.0}
                productColor="Gray"
                badgeClassName="bg-white"
                size="M"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductTwo}
                imgAlt="Arive Two"
                imgSrcSide={ProductTwoSide}
                badgeText="10%"
                title="Calvin Shorts"
                price={49.0}
                productColor="White"
                badgeClassName="bg-green-300"
                size="L"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductThree}
                imgAlt="Arive Three"
                imgSrcSide={ProductThreeSide}
                badgeText="New"
                title="Kirby T-Shirt"
                price={17.0}
                productColor="Black"
                badgeClassName="bg-white"
                size="S"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductFour}
                imgAlt="Arive Four"
                imgSrcSide={ProductFourSide}
                badgeText="10%"
                title="Cableknit Shawl"
                price={99.0}
                productColor="White"
                badgeClassName="bg-green-300"
                size="XL"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductFive}
                imgAlt="Arive Five"
                imgSrcSide={ProductFiveSide}
                badgeText="New"
                title="Colorful Jacket"
                price={29.0}
                productColor="Black"
                badgeClassName="bg-white"
                size="M"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductSix}
                imgAlt="Arive Six"
                imgSrcSide={ProductSixSide}
                badgeText="10%"
                title="Shirt In Botanical Cheetah Print"
                price={52.0}
                productColor="White"
                badgeClassName="bg-green-300"
                size="L"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductSeven}
                imgAlt="Arive Seven"
                imgSrcSide={ProductSevenSide}
                badgeText="New"
                title="Cotton Jersey T-Shirt"
                price={17.0}
                productColor="White"
                badgeClassName="bg-white"
                size="L"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                imgSrcFirst={ProductEight}
                imgAlt="Arive Eight"
                imgSrcSide={ProductEightSide}
                badgeText="10%"
                title="Zessi Dresses"
                price={49.0}
                productColor="Black"
                badgeClassName="bg-green-300"
                size="L"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <Link to="/shop">
            <button className="relative px-0 py-2 text-black text-sm md:text-base font-medium group cursor-pointer">
              <span className="group-hover:text-black transition-colors">
                SEE MORE
              </span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-1/3 group-hover:w-full transition-all"></span>
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
