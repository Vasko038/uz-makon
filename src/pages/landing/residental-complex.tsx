import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button, Form, Input, Select, Slider } from "antd";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
const { Option } = Select;
function ResidentalComplex() {
  const [form] = Form.useForm();
  const { t } = useTranslation("", { keyPrefix: "landing.residentalComplex" });
  return (
    <div className="residentalComplex_l my-[50px]">
      <Container>
        <Title className="!tex-main !text-[28px] md:!text-[35px]">
          {t("title")}
        </Title>
        <div>
          <Form form={form} className="flex flex-wrap items-center gap-x-5">
            {/* Жилой комплекс */}
            <Form.Item name="complex">
              <Select
                size="large"
                mode="multiple"
                placeholder={t("filter.complex")}
                className="!w-[200px]"
                allowClear
              >
                <Option value="Infinity">Infinity</Option>
                <Option value="Harizma">Harizma</Option>
                <Option value="Династия">Династия</Option>
                <Option value="O'Z Makon 1">O'Z Makon 1</Option>
                <Option value="O'Z Makon 2">O'Z Makon 2</Option>
                <Option value="Assalom Bog'lar">Assalom Bog'lar</Option>
              </Select>
            </Form.Item>

            {/* Количество комнат */}
            <Form.Item name="rooms">
              <Select
                mode="multiple"
                placeholder={t("filter.rooms")}
                className="!w-[200px]"
                size="large"
                allowClear
              >
                <Option value="1-комнатные">1-комнатные</Option>
                <Option value="2-комнатные">2-комнатные</Option>
                <Option value="3-комнатные">3-комнатные</Option>
                <Option value="4-комнатные">4-комнатные</Option>
                <Option value="5+-комнатные">5+-комнатные</Option>
              </Select>
            </Form.Item>

            {/* Площадь */}
            <Form.Item name="area" className="!m-0">
              <div className="flex flex-col">
                <Input size="large" className="!m-0 !rounded-sm" />
                <Slider
                  min={0}
                  max={1000}
                  className="!mt-0 -translate-y-1"
                  range
                  defaultValue={[20, 50]}
                />
              </div>
            </Form.Item>

            {/* Округ или район */}
            <Form.Item name="district">
              <Select
                size="large"
                mode="multiple"
                placeholder={t("filter.district")}
                className="!w-[200px] flex overflow-hidden"
              >
                <Option value="В центре">В центре</Option>
                <Option value="Яшнабадский">Яшнабадский</Option>
                <Option value="Юнусабадский">Юнусабадский</Option>
                <Option value="Мирабадский">Мирабадский</Option>
                <Option value="Шайхантахурский">Шайхантахурский</Option>
                <Option value="Алмазорский">Алмазорский</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                className="flex items-center bg-gray-200 rounded-sm"
                icon={<MdOutlineLocationOn />}
              >
                {t("filter.mapButton")}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                className="rounded-sm"
                type="primary"
                htmlType="submit"
              >
                {t("filter.submitButton")}
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mb-[30px] ">
          <Card
            name="harizma"
            title={"sadas"}
            discount="sdfdsf"
            status="only"
            location="miroz ulugbek"
            image={
              "https://avatars.mds.yandex.net/i?id=c9e174494fb4ca204c5281304bfaa16e7a02dd87-10244527-images-thumbs&n=13"
            }
          />
          <Card
            name="harizma"
            title={"sadas"}
            discount="sdfdsf"
            status="only"
            location="miroz ulugbek"
            image={
              "https://avatars.mds.yandex.net/i?id=c9e174494fb4ca204c5281304bfaa16e7a02dd87-10244527-images-thumbs&n=13"
            }
          />
          <Card
            name="harizma"
            title={"sadas"}
            discount="sdfdsf"
            status="only"
            location="miroz ulugbek"
            image={
              "https://avatars.mds.yandex.net/i?id=c9e174494fb4ca204c5281304bfaa16e7a02dd87-10244527-images-thumbs&n=13"
            }
          />
          <Card
            name="harizma"
            title={"sadas"}
            discount="sdfdsf"
            status="only"
            location="miroz ulugbek"
            image={
              "https://avatars.mds.yandex.net/i?id=c9e174494fb4ca204c5281304bfaa16e7a02dd87-10244527-images-thumbs&n=13"
            }
          />
          <Card
            name="harizma"
            title={"sadas"}
            discount="sdfdsf"
            status="only"
            location="miroz ulugbek"
            image={
              "https://avatars.mds.yandex.net/i?id=c9e174494fb4ca204c5281304bfaa16e7a02dd87-10244527-images-thumbs&n=13"
            }
          />
          <Card
            name="harizma"
            title={"sadas"}
            discount="sdfdsf"
            status="only"
            location="miroz ulugbek"
            image={
              "https://avatars.mds.yandex.net/i?id=c9e174494fb4ca204c5281304bfaa16e7a02dd87-10244527-images-thumbs&n=13"
            }
          />
        </div>
        <Button
          size="large"
          shape="round"
          className="block mx-auto text-main border-main"
        >
          {t("button")}
        </Button>
      </Container>
    </div>
  );
}

function Card({
  name,
  title,
  discount,
  status,
  location,
  image,
}: {
  name: string;
  title: string;
  discount: string;
  status: string;
  location: string;
  image: string;
}) {
  return (
    <div className="cursor-pointer">
      <div className="relative w-full aspect-[3/1.4]">
        <img className="w-full h-full" src={image} alt="" />
        <div className="absolute top-0 left-0 px-3 text-[13px]  py-1 text-center text-white bg-green-500">
          {status}
        </div>
        <div className="absolute bottom-0 right-0 px-3 text-[13px]  py-1 text-center text-white bg-main">
          {discount}
        </div>
      </div>
      <div className="py-2">
        <Paragraph className="!m-0 opacity-50 !text-[12px]">{title}</Paragraph>
        <div className="flex justify-between">
          <Paragraph className="!m-1 !font-bold !text-[14px]">{name}</Paragraph>
          <Paragraph className="!m-1">{name}</Paragraph>
        </div>
        <div className="flex justify-between">
          <Paragraph className="flex items-center !mb-0 gap-1">
            <CiLocationOn className="text-main !mb-0" />
            {location}
          </Paragraph>
          <Paragraph className="!mb-0">{name}</Paragraph>
        </div>
      </div>
    </div>
  );
}

export default ResidentalComplex;
