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
          className="border border-blue-500 border-solid !aspect-[3/3.2] sm:!aspect-[4/3.5] md:!aspect-[8/3.5] rounded-xl mb-5"
        >
          <SwiperSlide>sdsa</SwiperSlide>
          <SwiperSlide>sdsa</SwiperSlide>
          <SwiperSlide>sdsa</SwiperSlide>
          <SwiperSlide>sdsa</SwiperSlide>
          <SwiperSlide>sdsa</SwiperSlide>
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
