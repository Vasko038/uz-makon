import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { FaDiamond } from "react-icons/fa6";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "@assets/build-1.jpg";
import img2 from "@assets/build-2.jpg";
import img3 from "@assets/build-3.jpg";
import { GiEcology } from "react-icons/gi";

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
                className="w-full object-cover aspect-[3/1.7]"
                src={img1}
                alt="not img"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img
                className="w-full object-cover aspect-[3/1.7]"
                src={img2}
                alt="not img"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img
                className="w-full object-cover aspect-[3/1.7]"
                src={img3}
                alt="not img"
              />
            </SwiperSlide>
          </Swiper>

          <div>
            <ul className="space-y-3">
              {ulData.map((item) => (
                <li key={item.key} className="flex items-start gap-5">
                  <FaDiamond className="text-yellow-500" />
                  <Paragraph>{item.title}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid items-start grid-cols-4 gap-5 md:grid-cols-8">
          {advanetages.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="!h-[80px] !w-[80px] text-[30px] text-white bg-main rounded-full flex justify-center items-center">
                {item.icon}
              </div>

              <Paragraph className="!text-main text-center">
                {item.title}
              </Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
const ulData = [
  { key: 1, title: "Qulay va ajoyib imkoniyatlar ega uylar" },
  { key: 2, title: "Eko xududdagi  aqilli shahar qurilishi" },
  { key: 3, title: "Keng imkoniyatlarga ega uylar barpo etish" },
  { key: 4, title: "Energiya samaradorligi bo'yicha eng qulay yangi uylar " },
  {
    key: 5,
    title: "Yashash, ishlash va dam olish uchun qulay muhitga ega uylar",
  },
  { key: 6, title: "Yangi samarali va dinamik aqlli va raqamli hududlar" },
];

const advanetages = [
  { key: 1, title: "ekologik toza muhit", icon: <GiEcology /> },
  { key: 2, title: "bolalar maydonchasi", icon: <GiEcology /> },
  { key: 3, title: "yashil bog'", icon: <GiEcology /> },
  {
    key: 4,
    title: "yaqin masofadagi do'kon va restoranlar",
    icon: <GiEcology />,
  },
  { key: 5, title: "avtomoyka", icon: <GiEcology /> },
  { key: 6, title: "24/7  kuzatuv kameralari", icon: <GiEcology /> },
  { key: 7, title: "parkovka", icon: <GiEcology /> },
  { key: 8, title: "keng turar joylar", icon: <GiEcology /> },
];

export default AdvantageDetails;
