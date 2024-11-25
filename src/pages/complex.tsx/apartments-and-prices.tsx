import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button } from "antd";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
function ApartmentsAndPrices() {
  const { t } = useTranslation("", { keyPrefix: "complex.apartmentAndPrices" });
  return (
    <div className="mb-[50px]">
      <Container>
        <Title className="!text-[28px] md:!text-[35px]">{t("title")}</Title>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-[30px]">
          <div>
            <div className="grid grid-cols-2 gap-5"></div>
            <div className="border border-black border-opacity-50 border-solid rounded-md shadow-xl">
              <div className="p-2 border-b border-solid">
                <Title className="!text-[25px] !m-0 opacity-80">
                  adasd sad asd asd asd as d
                </Title>
              </div>
              <div className="p-2 border-b border-solid">
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    <Paragraph className="opacity-50 !mb-1">
                      Стоимость.
                    </Paragraph>
                    <Paragraph>{"asdsa"}</Paragraph>
                  </div>
                  <div className="flex flex-col">
                    <Paragraph className="opacity-50 !mb-1">
                      Стоимость.
                    </Paragraph>
                    <Paragraph>{"asdsa"}</Paragraph>
                  </div>
                </div>
                <Button className="border-main"></Button>
                <Button>skidka do</Button>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-3 mb-[20px]">
                  {/* Birinchi ustun */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Этаж
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">
                        2 из 16
                      </Paragraph>
                    </div>
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Дом
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">2</Paragraph>
                    </div>
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Подъезд
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">1</Paragraph>
                    </div>
                  </div>

                  {/* Ikkinchi ustun */}
                  <div className="flex flex-col gap-5 border-x">
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Отделка
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">
                        С полной отделкой
                      </Paragraph>
                    </div>
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Кухня
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">
                        13,43 м²
                      </Paragraph>
                    </div>
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Гостиная
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">
                        10,17 м²
                      </Paragraph>
                    </div>
                  </div>

                  {/* Uchinchi ustun */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Прихожая
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">
                        3,59 м²
                      </Paragraph>
                    </div>
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Санузел
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">
                        3,93 м²
                      </Paragraph>
                    </div>
                    <div>
                      <Paragraph className="!m-0 text-center opacity-50">
                        Лоджия
                      </Paragraph>
                      <Paragraph className="!m-0 text-center">
                        2,94 м²
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-[30px]">
                  <Paragraph className="opacity-50 !m-0">asdasdsd</Paragraph>
                  <Title className="!m-0  !text-main !text-[25px]">
                    800 000 000
                  </Title>
                </div>
                <Button
                  type="primary"
                  className="w-full rounded-sm"
                  size="large"
                ></Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 p-2 border border-black  py-[50px] lg:py-[0px] border-opacity-50 border-solid rounded-md shadow-xl">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-next",
                nextEl: ".swiper-button-prev",
              }}
              className="w-full h-full"
            >
              <Button icon={<GrFormNext />} className="swiper-button-next" />
              <Button
                icon={<GrFormPrevious />}
                className="swiper-button-prev"
              />
              <SwiperSlide>
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    className="w-[300px]"
                    src="https://avatars.mds.yandex.net/i?id=dee4a840c8e55ee323d4b1185daeba555af056c5f33a5459-12588376-images-thumbs&n=13"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    className="w-[300px]"
                    src="https://avatars.mds.yandex.net/i?id=dee4a840c8e55ee323d4b1185daeba555af056c5f33a5459-12588376-images-thumbs&n=13"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
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

export default ApartmentsAndPrices;
