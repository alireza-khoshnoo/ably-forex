import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import brand1 from "../../../assets/images/brand1.png";
import brand2 from "../../../assets/images/brand2.png";
import brand3 from "../../../assets/images/brand3.png";
import brand4 from "../../../assets/images/brand4.png";
import brand5 from "../../../assets/images/brand5.png";

const brandsImg = [brand1, brand2, brand3, brand4, brand5];
export default function Slider() {
  return (
    <div className="w-full bg-glass border-y py-7 mt-10">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        loop={true}
        freeMode={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {brandsImg.map((brand, index) => (
          <SwiperSlide key={index} className="item">
            <img
              src={brand}
              className="mx-auto"
              alt="brand"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
