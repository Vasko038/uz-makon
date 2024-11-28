import Container from "@components/container";
import { phoneNumber } from "@src/constants";
import { Divider, Space, Button, Dropdown, Drawer } from "antd";
import logo from "@assets/logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Paragraph } from "@components/typography";
import { FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useCallback } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { socialMediaLink } from "@src/constants";
import { FaTelegramPlane } from "react-icons/fa";

function Header() {
  const { t, i18n } = useTranslation("", { keyPrefix: "landing.header" });
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpenDrawer = !!searchParams.get("drawer");
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const navigate = useNavigate();
  const navigateChangeLang = useCallback(
    (lang: string) =>
      pathname.length === 2
        ? `/${lang}`
        : `/${lang}/${pathname.slice(2).join("/")}`,
    [pathname]
  );
  const languageTitle = (() => {
    switch (i18n.language) {
      case "uz":
        return "Uz";
      case "ru":
        return "Ru";
      case "uz-Cyrl":
        return "Уз";
      case "en":
        return "En";
      default:
        return "Unknown";
    }
  })();

  return (
    <>
      <header className="sticky top-0 !z-[40] bg-white">
        <Container>
          <div className="flex lg:justify-between lg:w-[90%] bg-white mx-auto">
            <div className=" hidden lg:flex md:justify-between lg:justify-around p-4 py-3  md:w-[46%] !bg-main">
              {pages.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="!m-0 font-semibold flex items-center text-white outline-none"
                >
                  {t("pages." + item.path)}
                </Link>
              ))}
            </div>
            <div
              className=" !h-[70px] cursor-pointer"
              onClick={() => navigate("/" + i18n.language)}
            >
              <img className="w-full h-full" src={logo} alt="not img" />
            </div>
            <div className="flex p-4  py-3 flex-1 sm:justify-between lg:justify-around justify-end sm:gap-5 md:gap-0 items-center  lg:w-[46%] bg-main">
              <div className="hidden gap-4 sm:flex !text-white">
                {socialLinks.map((item) => (
                  <span className="!p-0" key={item.key}>
                    {item.icon}
                  </span>
                ))}
              </div>
              <Paragraph className="hidden sm:block  !text-white text-[14px] md:text-[20px] lg:hidden font-semibold !m-0">
                {phoneNumber}
              </Paragraph>
              <div>
                <Dropdown
                  menu={{
                    items: translateItems.map((item) => ({
                      key: item.key,
                      label: (
                        <Space
                          className="w-full"
                          onClick={async () => {
                            await i18n.changeLanguage(item.key);
                            navigate(navigateChangeLang(item.key), {
                              replace: true,
                            });
                          }}
                        >
                          <Paragraph className="!m-0">{item.label}</Paragraph>
                        </Space>
                      ),
                    })),
                  }}
                  placement="bottomLeft"
                  trigger={["click"]}
                >
                  <Button type="text" className="!rounded-md !text-white">
                    {languageTitle} <FaAngleDown />
                  </Button>
                </Dropdown>
                <Space className="items-center">
                  <Paragraph className=" !text-white hidden md:hidden xl:block !m-0 font-semibold text-[20px]">
                    {phoneNumber}
                  </Paragraph>
                  <Button
                    className="hidden lg:flex"
                    size="large"
                    shape="circle"
                  >
                    <FaPhone />
                  </Button>
                </Space>
                <Button
                  onClick={() => setSearchParams({ drawer: "true" })}
                  className="text-white lg:hidden"
                  icon={<FaBars />}
                  type="text"
                />
              </div>
            </div>
          </div>
          <Divider className="!mt-0" />
        </Container>
      </header>
      <Drawer
        width={300}
        onClose={() => setSearchParams({})}
        open={isOpenDrawer}
      >
        <div className="flex flex-col gap-3">
          {pages.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className="!m-0 font-semibold !text-[25px] flex items-center outline-none"
            >
              {t("pages." + item.path)}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
}
const pages = [
  { key: "1", path: "about" },
  { key: "2", path: "projects" },
  { key: "3", path: "news" },
  { key: "4", path: "contact-us" },
];

export default Header;

const translateItems = [
  {
    key: "uz",
    label: "Uz",
  },
  {
    key: "uz-Cyrl",
    label: "Уз",
  },
  {
    key: "ru",
    label: "Ру",
  },
  {
    key: "en",
    label: "En",
  },
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
