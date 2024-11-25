import { Paragraph, Title } from "./typography";

function ProjectCard({
  image,
  status,
  title,
  subtitle,
}: {
  image: string;
  status: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="w-full cursor-pointer duration-200 hover:scale-[1.01] relative aspect-[3/1.5] p-4 flex flex-col justify-between"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="!rounded-sm bg-blue-500 text-center inline-block px-3 py-1 w-[20%] text-white !bg-opacity-60">
        {status}
      </div>
      <div className="z-[20]">
        <Title className="!text-white !mb-1 md:!mb-3 !text-[22px]">
          {title}
        </Title>
        <Paragraph className="!text-white !m-0">{subtitle}</Paragraph>
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, #234192 10%, rgba(26, 27, 31, 0.1) 60%)",
        }}
        className="absolute top-0 bottom-0 left-0 w-full opacity-45 "
      ></div>
    </div>
  );
}

export default ProjectCard;
