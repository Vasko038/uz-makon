import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button } from "antd";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useTranslation } from "react-i18next";
function EntranceGroup() {
  const { t } = useTranslation("", { keyPrefix: "complex.entranceGroup" });
  return (
    <div className="mb-[50px]">
      <Container>
        <Title>{t("title")}</Title>
        <div className="relative  mb-[50px]">
          <Swiper
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-next",
              nextEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="border border-blue-500 border-solid !aspect-[3/3.2] sm:!aspect-[4/3.5] md:!aspect-[8/3.5] rounded-xl mb-5"
          >
            <Button icon={<GrFormNext />} className="swiper-button-next" />
            <Button icon={<GrFormPrevious />} className="swiper-button-prev" />
            <SwiperSlide>asd</SwiperSlide>
            <SwiperSlide>sada</SwiperSlide>
            <SwiperSlide>sad</SwiperSlide>
            <SwiperSlide>asd</SwiperSlide>
            <SwiperSlide>asd</SwiperSlide>
            <SwiperSlide>asd</SwiperSlide>
            <SwiperSlide>sad</SwiperSlide>
          </Swiper>
          <div className="absolute w-full  -bottom-7  z-[20] ">
            <Button
              size="large"
              shape="round"
              className=" !w-[100px] block  mx-auto "
            >
              aasdds
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {compforts.map((item) => (
            <div key={item.key} className="flex gap-4">
              <div className="w-[60px] rounded-full h-[60px] !bg-main flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <Title className="!text-[30px] !mb-0">{item.title}</Title>
                <Paragraph className="!m-0">{item.subtitle}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
const compforts = [
  { key: 1, title: "5 minut ", subtitle: "do blijaysheko parka", icon: "" },
  { key: 2, title: "", subtitle: "", icon: "" },
  { key: 3, title: "", subtitle: "", icon: "" },
  { key: 4, title: "", subtitle: "", icon: "" },
];

export default EntranceGroup;
