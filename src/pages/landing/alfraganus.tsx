import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button } from "antd";

function Alfraganus() {
  return (
    <div className="alfragunus_l mb-[50px]">
      <Container>
        <div className="relative py-[40px]">
          <div className="!z-10 grid gir-cols-1 lg:grid-cols-2 p-4  backdrop-blur-xl  bg-opacity-25  bg-blue-300">
            <div>
              <img
                className="w-full"
                src="https://yandex.ru/images/search?text=car&img_url=http%3A%2F%2Ftop-tuning.ru%2Fupload%2Fimages%2Fnews%2F103102%2Fczinger_21c_hypercar_1.jpg&pos=4&rpt=simage&stype=image&lr=189646&parent-reqid=1732378202401698-11370739172229761462-balancer-l7leveler-kubr-yp-vla-258-BAL&source=serp"
                alt=""
              />
            </div>
            <div className=" !px-7  sm:!px-14 lg:px-[40px] lg:pe-[60px]">
              <Title className="text-center !text-white uppercase !mb-2">
                ALFRAGANUS
              </Title>
              <Paragraph className="text-center text-white uppercase">
                Savdo markazi{" "}
              </Paragraph>
              <Paragraph className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                id Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem saepe consectetur velit ipsum quas sit aliquid cum
                tempora a sunt.
              </Paragraph>
              <Button
                size="large"
                className="block px-5 mx-auto text-white bg-transparent rounded-sm "
              >
                Kirish
              </Button>
            </div>
          </div>
          <div className="absolute  left-[50%]  lg:left-auto  w-[90%]  lg:w-[45%] md:!right-[40px] -translate-x-1/2 lg:translate-x-0  lg:!right-[50px] bg-blue-500 !-z-2 top-0 bottom-0  z-[-200]"></div>
        </div>
      </Container>
    </div>
  );
}

export default Alfraganus;
