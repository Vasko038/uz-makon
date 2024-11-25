import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button, Space } from "antd";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
function Section1() {
  const { t } = useTranslation("", { keyPrefix: "landing.5simple" });
  return (
    <div className="section_l mb-[50px]">
      <Container className="shadow-xl">
        <div className="relative ">
          <Swiper
            className=" pt-[50px]"
            slidesPerView={1}
            spaceBetween={0}
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.key} className="">
                <div className="grid items-center w-full pb-[50px] lg:pb-[20px] pt-[70px] md:pt-[70px] grid-cols-1 gap-5 py-4 md:grid-cols-2">
                  <div className="flex flex-col gap-5">
                    <Title className="!text-[20px]">{item.title}</Title>
                    <Paragraph className="opacity-50">{item.desc}</Paragraph>
                  </div>
                  <div className="flex justify-center w-full">
                    <img
                      className="w-[80%] aspect-[3/1.5]"
                      src={item.img}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute top-0 z-50 md:top-[0px] lg:top-[50px]  xl:top-[70px] grid grid-cols-1 gap-5 lg:grid-cols-2">
              <Title className="!text-[20px] sm:!text-[28px]">
                {t("title")}
              </Title>
            </div>
            <div className="absolute w-[40%]  bottom-5">
              <div></div>
              <Space>
                <Button
                  className="swiper-button-prev !w-[40px] !h-[40px]"
                  shape="circle"
                  icon={<GrFormPrevious />}
                />
                <Button
                  className="swiper-button-next !w-[40px] !h-[40px]"
                  shape="circle"
                  icon={<GrFormNext />}
                />
              </Space>
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
const data = [
  {
    key: 1,
    img: "https://gh.uz/wp-content/uploads/buynew-4-step.svg",
    title: "1. Сдача дома и регистрация права собственности",
    desc: "Вы можете предварительно ознакомиться с проектами GH на нашем веб-сайте, страницах в социальных сетях и / или сразу заказать обратный звонок. С Вами по телефону или Telegram мессенджеру свяжется персональный менеджер и назначит время встречи в офисе продаж.",
  },
  {
    key: 1,
    img: "https://gh.uz/wp-content/uploads/buynew-4-step.svg",
    title: "2. Сдача дома и регистрация права собственности",
    desc: "Вы можете предварительно ознакомиться с проектами GH на нашем веб-сайте, страницах в социальных сетях и / или сразу заказать обратный звонок. С Вами по телефону или Telegram мессенджеру свяжется персональный менеджер и назначит время встречи в офисе продаж.",
  },
  {
    key: 1,
    img: "https://gh.uz/wp-content/uploads/buynew-4-step.svg",
    title: "3. Сдача дома и регистрация права собственности",
    desc: "Вы можете предварительно ознакомиться с проектами GH на нашем веб-сайте, страницах в социальных сетях и / или сразу заказать обратный звонок. С Вами по телефону или Telegram мессенджеру свяжется персональный менеджер и назначит время встречи в офисе продаж.",
  },
  {
    key: 1,
    img: "https://gh.uz/wp-content/uploads/buynew-4-step.svg",
    title: "4. Сдача дома и регистрация права собственности",
    desc: "Вы можете предварительно ознакомиться с проектами GH на нашем веб-сайте, страницах в социальных сетях и / или сразу заказать обратный звонок. С Вами по телефону или Telegram мессенджеру свяжется персональный менеджер и назначит время встречи в офисе продаж.",
  },
  {
    key: 1,
    img: "https://gh.uz/wp-content/uploads/buynew-4-step.svg",
    title: "5. Сдача дома и регистрация права собственности",
    desc: "Вы можете предварительно ознакомиться с проектами GH на нашем веб-сайте, страницах в социальных сетях и / или сразу заказать обратный звонок. С Вами по телефону или Telegram мессенджеру свяжется персональный менеджер и назначит время встречи в офисе продаж.",
  },
];

export default Section1;
