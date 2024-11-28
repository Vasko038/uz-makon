import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button, Space } from "antd";
import { useTranslation } from "react-i18next";
import img1 from "@assets/build-1.jpg";
import img2 from "@assets/build-2.jpg";
import img3 from "@assets/build-3.jpg";
function News() {
  const { t } = useTranslation("", { keyPrefix: "news" });
  return (
    <div className=" news-n mb-[50px]">
      <Container>
        <Title className="!text-main !text-[28px] md:!text-[35px]">
          {t("news")}
        </Title>
        <Space size={"large"} className="mb-[20px]">
          <Button size="large" className="rounded-sm">
            {t("all")}
          </Button>
          <Button size="large" className="rounded-sm">
            {t("news")}
          </Button>
          <Button size="large" className="rounded-sm">
            {t("stock")}
          </Button>
        </Space>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 ">
          {defaultItems.map((item) => (
            <div
              key={item.key}
              className="overflow-hidden border border-black border-solid rounded-md border-opacity-20"
            >
              <img
                className="w-full object-cover !aspect-[3/1.5]"
                src={item.img}
              />
              <div className="p-4">
                <Paragraph className="opacity-50">{item.title}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

//buni ochirib tashasasyizb boladi backend ni ulaganizdan keyin
const defaultItems = [
  {
    key: 1,
    img: img1,
    title: "sdsadsdasd",
  },
  {
    key: 2,
    img: img2,
    title: "sdsadsdasd",
  },
  {
    key: 3,
    img: img1,
    title: "sdsadsdasd",
  },
  {
    key: 4,
    img: img3,
    title: "sdsadsdasd",
  },
  {
    key: 5,
    img: img2,
    title: "sdsadsdasd",
  },
  {
    key: 6,
    img: img1,
    title: "sdsadsdasd",
  },
];

export default News;
