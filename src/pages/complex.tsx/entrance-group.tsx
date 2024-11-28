import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button } from "antd";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import img1 from "@assets/build-1.jpg";
import img2 from "@assets/build-2.jpg";
import img3 from "@assets/build-3.jpg";
import { FaCar } from "react-icons/fa";
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
          <div className="absolute w-full  -bottom-7  z-[20] ">
            <Button
              size="large"
              shape="round"
              className=" !w-[100px] block  mx-auto "
            >
              boshlash
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {compforts.map((item) => (
            <div key={item.key} className="flex gap-4">
              <div className="!w-[60px]  flex-shrink-0 rounded-full !h-[60px] text-[20px] !aspect-square text-white !bg-main flex items-center justify-center">
                {item.icon}
              </div>
              <div className="">
                <Title className="!text-[20px] !mb-2">{item.title}</Title>
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
  {
    key: 1,
    title: "Elekt energiya",
    subtitle: "Energiya samaradorligi bo'yicha eng qulay yangi uylar ",
    icon: <FaCar />,
  },
  {
    key: 2,
    title: "Dam olish",
    subtitle: "Yashash, ishlash va dam olish uchun qulay muhitga ega uylar",
    icon: <FaCar />,
  },
  {
    key: 3,
    title: "Aqli hudud",
    subtitle: "Yangi samarali va dinamik aqlli va raqamli hududlar",
    icon: <FaCar />,
  },
  {
    key: 4,
    title: "toza ekolik",
    subtitle: "Yangi uylar - toza ekologik va madaniy landshaftli",
    icon: <FaCar />,
  },
];

export default EntranceGroup;
