import Container from "@components/container";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
function Banner() {
  return (
    <div className="mb-[50px]">
      <Container>
        <Swiper
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="border border-blue-500 border-solid !aspect-[3/3.2] sm:!aspect-[4/3.5] md:!aspect-[8/3.5] rounded-xl mb-5"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Banner;
