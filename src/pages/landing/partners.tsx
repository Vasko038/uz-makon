import Container from "@components/container";
import { Title } from "@components/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
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
          navigation={{
            prevEl: ".swiper-button-next",
            nextEl: ".swiper-button-prev",
          }}
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
          <Button icon={<GrFormNext />} className="swiper-button-next" />
          <Button icon={<GrFormPrevious />} className="swiper-button-prev" />
          {items.map((item) => (
            <SwiperSlide key={item.key}>
              <div className=" !rounded-lg flex flex-col gap-3 items-center text-center border border-solid border-black border-opacity-50 p-4">
                <img src={item.img} />
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
  {
    key: 1,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    title: "sanoat qurilish banki",
    link: "",
    linkTitle: "www.sanoatqurilish.uz",
  },
  {
    key: 2,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    link: "",
    title: "sanoat qurilish banki",
    linkTitle: "www.sanoatqurilish.uz",
  },
  {
    key: 3,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    link: "",
    title: "sanoat qurilish banki",
    linkTitle: "www.sanoatqurilish.uz",
  },
  {
    key: 4,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    link: "",
    title: "sanoat qurilish banki",
    linkTitle: "www.sanoatqurilish.uz",
  },
  {
    key: 5,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    link: "",
    title: "sanoat qurilish banki",
    linkTitle: "www.sanoatqurilish.uz",
  },
  {
    key: 6,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    link: "",
    title: "sanoat qurilish banki",
    linkTitle: "www.sanoatqurilish.uz",
  },
  {
    key: 7,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    link: "",
    title: "sanoat qurilish banki",
    linkTitle: "www.sanoatqurilish.uz",
  },
  {
    key: 8,
    img: "https://avatars.mds.yandex.net/i?id=aa7a10f8138865661fab53d5ae12914e-5232770-images-thumbs&n=13",
    link: "",
    title: "sanoat qurilish banki",
    linkTitle: "www.sanoatqurilish.uz",
  },
];

export default Partners;
