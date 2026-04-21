import LatestBlogCard from "../LatestBlogCard";
import Container from "../Container";

import BlogOne from "../../assets/LatestBlogOne.jpg";
import BlogTwo from "../../assets/LatestBlogTwo.png";
import BlogThree from "../../assets/LatestBlogThree.png";
import BlogFour from "../../assets/LatestBlogFour.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const LatestBlog = () => {
  return (
    <div className="py-[60px] bg-[#F3EDDF] px-3 lg:px-0 overflow-hidden">
      <Container>
        <h3 className="text-center text-4xl font-medium mb-10">
          Latest in Blog
        </h3>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <LatestBlogCard
              imgSrc={BlogOne}
              imgAlt="Blog One"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestBlogCard
              imgSrc={BlogTwo}
              imgAlt="Blog Two"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestBlogCard
              imgSrc={BlogThree}
              imgAlt="Blog Three"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestBlogCard
              imgSrc={BlogFour}
              imgAlt="Blog Four"
              adminTxt="BY ADMIN"
              dateTxt="APRIL 05, 2025"
              pTxt="Woman with good shoes is never be ugly place"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default LatestBlog;
