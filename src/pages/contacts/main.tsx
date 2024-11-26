import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { phoneNumber } from "@src/constants";
import { Link } from "react-router-dom";
import { PiMessengerLogo } from "react-icons/pi";
import { Button, Space } from "antd";
import { RiRobot2Line } from "react-icons/ri";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { socialMediaLink } from "@src/constants";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const cardClass = "p-4 shadow-xl";
const TitleClass = "!text-[18px] !font-bold ";
function ContactMain() {
  const { t } = useTranslation("", { keyPrefix: "contacts" });
  return (
    <Container className="mb-[50px]">
      <Title className="!text-main !text-[28px] md:!text-[35px] !mb-5">
        {t("title")}
      </Title>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        <div
          className={`${cardClass} sm:col-span-2 md:col-span-2  lg:col-span-3 xl:col-span-2`}
        >
          <Title className={TitleClass}>{t("adress.title")}</Title>
          <Paragraph className="whitespace-pre-line opacity-50">
            Яшнабадский район, ул. Истикбол 45-1. Офис продаж Infinity 3.{"\n"}
            Ориентир: Бывший вин завод. Жилой комплекс "Infinity".
          </Paragraph>
        </div>
        <div className={`${cardClass} lg:col-span-2 xl:col-span-1`}>
          <Title className={TitleClass}>{t("workTime.title")}</Title>
          <Paragraph className="!m-0 opacity-80">
            {t("workTime.subtitle")}
          </Paragraph>
          <Paragraph className="!mb-0 opacity-50">
            Пн-Пт: с 9:00 до 19:00
          </Paragraph>
          <Paragraph className="!mb-0 opacity-50 ">
            Сб-Вс: с 10:00 до 18:00
          </Paragraph>
        </div>
        <AskQuestion className="md:hidden" />
        <div
          className={`${cardClass} sm:col-span-2  md:col-span-2 lg:col-span-2`}
        >
          <Title className={TitleClass}>{t("callCenter.title")}</Title>
          <Title className="!mb-0  !mt-5 !text-main !text-[25px] sm:!text-[30px]">
            {phoneNumber}
          </Title>
        </div>
        <AskQuestion className="hidden md:block" />
        <SubscribeChannel className="hidden col-span-2 lg:grid xl:hidden" />
        <div
          className={`${cardClass} sm:col-span-2  md:col-span-3  lg:col-span-5 xl:col-span-4`}
        >
          <Title className={TitleClass}>{t("postalAddresses.title")} </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 md:hidden">
            {chunkArray(emailAdress, emailAdress.length).map((chunk, index) => (
              <ul key={index} className="space-y-2 ">
                {chunk.map(
                  (jtem: { link: string; relevant: string; title: string }) => (
                    <li key={jtem.link} className="grid grid-cols-2 gap-2">
                      <Paragraph className="!m-0">{jtem.relevant}</Paragraph>
                      <Paragraph className="!m-0">
                        <Link to={jtem.link}>{jtem.title}</Link>
                      </Paragraph>
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
          <div className="hidden grid-cols-1 md:grid-cols-2 md:grid">
            {chunkArray(emailAdress, 3).map((chunk, index) => (
              <ul key={index} className="space-y-2 ">
                {chunk.map(
                  (jtem: { link: string; relevant: string; title: string }) => (
                    <li key={jtem.link} className="grid grid-cols-2 gap-2">
                      <Paragraph className="!m-0">
                        {t("postalAddresses." + jtem.relevant)}
                      </Paragraph>
                      <Paragraph className="!m-0">
                        <Link to={jtem.link}>{jtem.title}</Link>
                      </Paragraph>
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
        </div>
        <SubscribeChannel className=" sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2 lg:hidden xl:block" />
      </div>
    </Container>
  );
}
export default ContactMain;

function SubscribeChannel({ className }: { className?: string }) {
  const { t } = useTranslation("", { keyPrefix: "contacts.socialNetworks" });
  return (
    <div className={`${cardClass} ${className}`}>
      <Title className={TitleClass}>{t("title")} </Title>
      <Paragraph className="opacity-50">{t("subtitle")}</Paragraph>
      <Space size={"large"}>
        {socialLinks.map((item) => (
          <Button
            className="rounded-md"
            size="large"
            shape="circle"
            key={item.key}
            icon={item.icon}
          />
        ))}
      </Space>
    </div>
  );
}
function AskQuestion({ className }: { className?: string }) {
  const { t } = useTranslation("", { keyPrefix: "contacts.askQuestion" });
  return (
    <div className={`${cardClass} ${className}`}>
      <Title className={TitleClass}>{t("title")}</Title>
      <Paragraph className="opacity-50">{t("subtitle")} </Paragraph>
      <Space>
        <Button shape="circle" icon={<PiMessengerLogo />}></Button>
        <Button shape="circle" icon={<RiRobot2Line />}></Button>
      </Space>
    </div>
  );
}

function chunkArray(
  array: { relevant: string; title: string; link: string }[],
  chunkSize: number
) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
const emailAdress: { relevant: string; title: string; link: string }[] = [
  { relevant: "generalInfo", title: "info@gh.uz", link: "info@gh.uz" },
  { relevant: "feedback", title: "info@gh.uz", link: "info@gh.uz" },
  { relevant: "supplyDepartment", title: "info@gh.uz", link: "info@gh.uz" },
  { relevant: "marketingDepartment", title: "info@gh.uz", link: "info@gh.uz" },
  { relevant: "salesDepartment", title: "info@gh.uz", link: "info@gh.uz" },
  { relevant: "vacancies", title: "info@gh.uz", link: "info@gh.uz" },
];
const socialLinks = [
  {
    key: 1,
    icon: <FaFacebookF className="text-black" />,
    link: socialMediaLink.facebook,
  },
  { key: 2, icon: <FaInstagram />, link: socialMediaLink.instagram },
  { key: 3, icon: <FaTelegramPlane />, link: socialMediaLink.telegram },
  { key: 4, icon: <AiOutlineYoutube />, link: socialMediaLink.telegram },
];
