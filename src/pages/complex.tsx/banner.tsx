import Container from "@components/container";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "@assets/build-1.jpg";
import img2 from "@assets/build-2.jpg";
import img3 from "@assets/build-3.jpg";
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
          <SwiperSlide>
            <img
              src={img1}
              className="object-cover w-full h-full"
              alt="not img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              className="object-cover w-full h-full"
              alt="not img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              className="object-cover w-full h-full"
              alt="not img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img1}
              className="object-cover w-full h-full"
              alt="not img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              className="object-cover w-full h-full"
              alt="not img"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Banner;
