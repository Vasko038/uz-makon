import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button, Space } from "antd";
import { useTranslation } from "react-i18next";

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
    img: "https://avatars.mds.yandex.net/i?id=d1402c53b4a2f5df60ba2d90a83a6057d6f7b556-8497452-images-thumbs&n=13",
    title: "sdsadsdasd",
  },
  {
    key: 2,
    img: "https://avatars.mds.yandex.net/i?id=33b2fead5a0e15de13b3db93a8cc678bc89f159e-4881188-images-thumbs&n=13",
    title: "sdsadsdasd",
  },
  {
    key: 3,
    img: "https://avatars.mds.yandex.net/i?id=d1402c53b4a2f5df60ba2d90a83a6057d6f7b556-8497452-images-thumbs&n=13",
    title: "sdsadsdasd",
  },
  {
    key: 4,
    img: "https://avatars.mds.yandex.net/i?id=bd941ef9ec3b89b8727f46a4eb3271f61b1fd615-5229005-images-thumbs&n=13",
    title: "sdsadsdasd",
  },
  {
    key: 5,
    img: "https://avatars.mds.yandex.net/i?id=33b2fead5a0e15de13b3db93a8cc678bc89f159e-4881188-images-thumbs&n=13",
    title: "sdsadsdasd",
  },
  {
    key: 6,
    img: "https://avatars.mds.yandex.net/i?id=f562c1313b13f629f8c57c4f161349f8cca14da9-5667979-images-thumbs&n=13",
    title: "sdsadsdasd",
  },
];

export default News;
