import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { Button } from "antd";
import img from "@assets/build-1.jpg";

function Alfraganus() {
  return (
    <div className="alfragunus_l mb-[50px]">
      <Container>
        <div className="relative py-[40px]">
          <div className="!z-10 grid grid-cols-1 lg:grid-cols-2 p-4 py-[20px]  backdrop-blur-xl  bg-opacity-25  bg-blue-300">
            <div>
              <img
                className="lg:w-[90%] mx-auto w-full object-cover aspect-[3/1.7] "
                src={img}
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
