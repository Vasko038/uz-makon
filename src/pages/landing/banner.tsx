import Container from "@components/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Title } from "@components/typography";
import { phoneNumber } from "@src/constants";
import { Button } from "antd";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useTranslation } from "react-i18next";
import img1 from "@assets/build-1.jpg";
import img2 from "@assets/build-2.jpg";
import img3 from "@assets/build-3.jpg";
function Banner() {
  const { t } = useTranslation("", { keyPrefix: "landing.banner" });
  return (
    <div className="banner_l">
      <Container className="mb-[50px]">
        <Swiper
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className=" !aspect-[3/3.2] sm:!aspect-[4/3.5] md:!aspect-[8/3.5] rounded-xl mb-5"
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
        <div className="flex flex-col items-center justify-around px-3 py-5 bg-gray-200 md:flex-row ">
          <Title className="!m-0 !text-[30px] hidden xl:block">
            {phoneNumber}
          </Title>
          <Button
            className="!rounded-sm mb-5 md:m-0 !border-1 px-5 border-solid border-black"
            size="large"
          >
            {t("callMe")}
          </Button>
          <Title className="!m-0 !mb-3 md:!mb-0 !text-[18px]">
            {t("opportunity")}
          </Title>
          <Button
            size="large"
            className="!rounded-sm w-full md:w-auto lg:!px-[100px]"
            type="primary"
          >
            {t("invetment")}
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
