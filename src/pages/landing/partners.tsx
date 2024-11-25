import Container from "@components/container";
import { Title } from "@components/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Partners() {
  const { t } = useTranslation("", { keyPrefix: "landing.parters" });
  return (
    <div className="partners_l mb-[50px]">
      <Container>
        <Title className="!text-[28px] md:!text-[35px] !text-main">
          {t("title")}
        </Title>
        <Swiper
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="px-2 pb-2"
          navigation={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2.1, spaceBetween: 20 },
            640: {
              slidesPerView: 3.05,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
        >
          {items.map((item) => (
            <SwiperSlide key={item.key}>
              <div className=" !rounded-lg flex flex-col gap-3 items-center text-center border border-solid border-black border-opacity-50 p-4">
                <img src="sada" />
                {item.title}
                <Link className="text-blue-700" to={item.link}>
                  {item.linkTitle}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

const items = [
  { key: 1, img: "", title: "sad", link: "", linkTitle: "dsfsd" },
  { key: 2, img: "", title: "asd", link: "", linkTitle: "dsfsdf" },
  { key: 3, img: "", title: "asasd", link: "", linkTitle: "dsf" },
  { key: 4, img: "", title: "asd", link: "", linkTitle: "sdfdsf" },
  { key: 5, img: "", title: "asd", link: "", linkTitle: "sdfsdfsdf" },
  { key: 6, img: "", title: "sad", link: "", linkTitle: "sdfsd" },
  { key: 7, img: "", title: "sad", link: "", linkTitle: "sdfsdf" },
  { key: 8, img: "", title: "sd", link: "", linkTitle: "sdfsdf" },
];

export default Partners;
