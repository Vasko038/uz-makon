import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { FaDiamond } from "react-icons/fa6";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
function AdvantageDetails() {
  const { t } = useTranslation("", { keyPrefix: "landing.adventageDetails" });
  return (
    <div className="mb-[50px]">
      <Container>
        <Title className="!text-main">{t("title")}</Title>
        <Title className="!text-[25px] !text-main !mb-[20px]">
          {t("architecture")}
        </Title>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center mb-[30px]">
          <Swiper
            className="w-full"
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="w-full">
              <img
                className="w-full"
                src="https://avatars.mds.yandex.net/i?id=e7ff1934099bf189cc3c041bd4c75a1553ded0bc-3979623-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img
                className="w-full"
                src="https://avatars.mds.yandex.net/i?id=e7ff1934099bf189cc3c041bd4c75a1553ded0bc-3979623-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img
                className="w-full"
                src="https://avatars.mds.yandex.net/i?id=e7ff1934099bf189cc3c041bd4c75a1553ded0bc-3979623-images-thumbs&n=13"
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <div>
            <ul className="space-y-5">
              {ulData.map((item) => (
                <li key={item.key} className="flex items-start gap-5">
                  <FaDiamond className="text-yellow-500" />
                  <Paragraph>{item.title}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 md:grid-cols-8">
          {advanetages.map((item) => (
            <div key={item.key} className="flex flex-col justify-center">
              <img src={item.icon} />
              <Paragraph className="!text-main">{item.title}</Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
const ulData = [
  { key: 1, title: "dsad asd asdsad sd sadsad" },
  { key: 2, title: "dsad asd asdsad sd sadsad" },
  { key: 3, title: "dsad asd asdsad sd sadsad" },
  { key: 4, title: "dsad asd asdsad sd sadsad" },
  { key: 5, title: "dsad asd asdsad sd sadsad" },
  { key: 6, title: "dsad asd asdsad sd sadsad" },
];

const advanetages = [
  { key: 1, title: "asd", icon: "" },
  { key: 2, title: "asdasd", icon: "" },
  { key: 3, title: "asdasd", icon: "" },
  { key: 4, title: "asdasd", icon: "" },
  { key: 5, title: "dsadsada", icon: "" },
  { key: 6, title: "sadasda", icon: "" },
  { key: 7, title: "asdasdas", icon: "" },
  { key: 8, title: "asdasdsad", icon: "" },
];

export default AdvantageDetails;
