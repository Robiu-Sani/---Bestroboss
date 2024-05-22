import SectionName from "./SectionName";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";

export default function OnlineOrder() {
  return (
    <div className="w-full py-10">
      <SectionName
        title="---From 11:00am to 10:00pm---"
        name="ORDER ONLINE"
      ></SectionName>
      <div className="w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper mb-10"
        >
          <SwiperSlide>
            <img src={slide1} alt="slide image" />
            <h3 className="text-3xl uppercase text-center -mt-20 text-white textShadow">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="slide image" />
            <h3 className="text-3xl uppercase text-center -mt-20 text-white textShadow">
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="slide image" />
            <h3 className="text-3xl uppercase text-center -mt-20 text-white textShadow">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="slide image" />
            <h3 className="text-3xl uppercase text-center -mt-20 text-white textShadow">
              disserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="slide image" />
            <h3 className="text-3xl uppercase text-center -mt-20 text-white textShadow">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
