import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ArticleCard from "./ArticleCard";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Button from "../../Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import { articles } from "../../../data/data";

export default function ArticlesSlider() {
  return (
    <div className="px-10 md:px-20">
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center mb-5">
          <span className="glow ">Articles</span> For Pro Traders
        </h3>
        <p className="section-text">
          Hey there pro traders, check out these articles with tips to take your
          trading game to the next level!
        </p>
      </div>
      <div className="flex gap-5 mx-5 my-4 items-center justify-between">
        <div className="flex gap-5">
          <div className="custom-swiper-button-prev">
            <Button>
              <IoIosArrowBack className="text-2xl" />
            </Button>
          </div>
          <div className="custom-swiper-button-next">
            <Button>
              <IoIosArrowForward className="text-2xl" />
            </Button>
          </div>
        </div>
        <Link to="/articles">
          <Button>
            <span className="mx-4">View More</span>
          </Button>
        </Link>
      </div>
      <Swiper
        spaceBetween={50}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Autoplay, Navigation]}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <ArticleCard {...article}></ArticleCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}