import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

function News() {
  const { t } = useTranslation("", { keyPrefix: "landing.news" });
  return (
    <div className="news_l my-[50px]">
      <Container>
        <Title className="!text-main !text-[28px] md:!text-[35px]">
          {t("title")}
        </Title>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <ul className="space-y-3 sm:col-span-2 lg:col-span-1">
            {dateNews.map((item) => (
              <li
                key={item.key}
                className="flex  items-center gap-5  lg:!flex-row"
              >
                <div className="flex flex-col lg:text-center">
                  <Title className="!mb-0 !text-[28px] whitespace-nowrap !text-main">
                    {item.day}
                  </Title>
                  <Paragraph className="!m-0 whitespace-nowrap ">
                    {item.month}
                  </Paragraph>
                </div>
                <Paragraph className=" !line-clamp-2 h-[40px]">
                  {item.title}
                </Paragraph>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Button className="flex gap-2 mx-auto" size="large" type="text">
        {t("button")}
        <GrFormNextLink />
      </Button>
    </div>
  );
}
function Card() {
  return (
    <div className="relative  pb-[120px] ">
      <img
        className="w-full"
        src="https://avatars.mds.yandex.net/i?id=3aa49924ad10afd14209fd06c4b9b09cf405e60f-12539815-images-thumbs&n=13"
        alt=""
      />
      <div className="absolute flex flex-col gap-[20px] p-4 bottom-[60px] left-4 right-4 bg-white border border-black border-solid border-opacity-20">
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center text-center ">
            <Title className="!m-0 !text-main  whitespace-nowrap !text-[20px]">
              24
            </Title>
            <Paragraph className="text-[14px]  whitespace-nowrap">
              lor
            </Paragraph>
          </div>
          <Paragraph className="row-span-2 !line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            voluptates! Lorem ipsum dolor sit amet consectetur
          </Paragraph>
        </div>
        <div className="flex justify-between">
          <Paragraph className="!mb-0">2024/12/05 17:35</Paragraph>
          <Paragraph className="!mb-0">
            <Link to={""}>Vazilrlik yangiliklari</Link>
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

const dateNews = [
  {
    key: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,officia. Quia voluptates facere nesciunt sapiente autem ipsum atque!Eligendi, aliquam.",
    day: 21,
    month: "NOY",
  },
  {
    key: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,officia. Quia voluptates facere nesciunt sapiente autem ipsum atque!Eligendi, aliquam.",
    day: 22,
    month: "NOY",
  },
  {
    key: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,officia. Quia voluptates facere nesciunt sapiente autem ipsum atque!Eligendi, aliquam.",
    day: 23,
    month: "NOY",
  },
  {
    key: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,officia. Quia voluptates facere nesciunt sapiente autem ipsum atque!Eligendi, aliquam.",
    day: 24,
    month: "NOY",
  },
  {
    key: 5,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,officia. Quia voluptates facere nesciunt sapiente autem ipsum atque!Eligendi, aliquam.",
    day: 25,
    month: "NOY",
  },
];

export default News;
