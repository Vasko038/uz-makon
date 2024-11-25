import Container from "@components/container";
import ProjectCard from "@components/projectCard";
import { Title } from "@components/typography";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation("", { keyPrefix: "landing.header" });
  return (
    <div>
      <Container className="mb-[50px]">
        <Title className="!text-main !text-[28px] md:!text-[35px] !mb-5">
          {t("pages.projects")}
        </Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-[30px]">
          {/*"bu component"*/}
          <ProjectCard
            key={1}
            title="asdasd"
            subtitle={"dasdsad"}
            image={"https://i.ytimg.com/vi/-uKT5MSQUCM/maxresdefault.jpg"}
            status={"sd"}
          />
          <ProjectCard
            key={1}
            title="asdasd"
            subtitle={"dasdsad"}
            image={"https://i.ytimg.com/vi/-uKT5MSQUCM/maxresdefault.jpg"}
            status={"sd"}
          />
          <ProjectCard
            key={1}
            title="asdasd"
            subtitle={"dasdsad"}
            image={"https://i.ytimg.com/vi/-uKT5MSQUCM/maxresdefault.jpg"}
            status={"sd"}
          />
          <ProjectCard
            key={1}
            title="asdasd"
            subtitle={"dasdsad"}
            image={"https://i.ytimg.com/vi/-uKT5MSQUCM/maxresdefault.jpg"}
            status={"sd"}
          />
        </div>
      </Container>
    </div>
  );
}

export default Projects;
