import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";

import { Button, Space } from "antd";
import { useTranslation } from "react-i18next";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { socialMediaLink } from "@src/constants";
import { FaTelegramPlane } from "react-icons/fa";

const titleClass = "!text-[20px] !mb-3 !text-white";
const Divider = () => {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="w-[40px] bg-red-700  bg-opacity-80 shadow-xl !rounded-md h-[2px]"></div>
      <div className="bg-opacity-20 bg-white h-[1px] w-full"></div>
    </div>
  );
};

function Footer() {
  const { t } = useTranslation("", { keyPrefix: "landing.footer" });

  return (
    <footer className="bg-main py-[70px]">
      <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <div className="w-full">
          <Title className={titleClass}>{t("about.title")}</Title>
          <Divider />
          <Paragraph className="!mb-5 text-white  opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, accusantium.
          </Paragraph>
          <Space>
            {socialLinks.map((item) => (
              <Button
                className="bg-white rounded-md text-white hover:!bg-white hover:!bg-opacity-25 border-none bg-opacity-30"
                size="large"
                key={item.key}
                icon={item.icon}
              />
            ))}
          </Space>
        </div>
        <div>
          <Title className={titleClass}> {t("services.title")}</Title>
          <Divider />
          <ul className="space-y-2">
            {services.map((item) => (
              <li key={item.key} className="text-white opacity-50">
                {t(item.titleKey)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Title className={titleClass}>{t("usefulLinks.title")}</Title>
          <Divider />
          <ul className="space-y-2">
            {usefulLinks.map((item) => (
              <li key={item.key} className="text-white opacity-50">
                {t(item.titleKey)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Title className={titleClass}>{t("contactDetails.title")}</Title>
          <Divider />
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-white opacity-50">
              <IoHomeOutline />
              asdasdsad
            </li>
            <li className="flex items-center gap-2 text-white opacity-50">
              <MdOutlineEmail /> sfdsfds
            </li>
            <li className="flex items-center gap-2 text-white opacity-50">
              <PiPhoneCallLight /> sdfdsf
            </li>
            <li className="flex items-center gap-2 text-white opacity-50">
              <CiClock2 /> sdfdsfsdf
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

const services = [
  { key: 1, titleKey: "services.items.0", link: "" },
  { key: 1, titleKey: "services.items.1", link: "" },
  { key: 1, titleKey: "services.items.2", link: "" },
];
const usefulLinks = [
  { key: 1, titleKey: "usefulLinks.items.0", link: "" },
  { key: 1, titleKey: "usefulLinks.items.1", link: "" },
  { key: 1, titleKey: "usefulLinks.items.2", link: "" },
];
const socialLinks = [
  {
    key: 1,
    icon: <FaFacebookF className="" />,
    link: socialMediaLink.facebook,
  },
  { key: 2, icon: <FaInstagram />, link: socialMediaLink.instagram },
  { key: 3, icon: <FaTelegramPlane />, link: socialMediaLink.telegram },
  { key: 4, icon: <AiOutlineYoutube />, link: socialMediaLink.telegram },
];
export default Footer;
