import Container from "@components/container";
import ProjectCard from "@components/projectCard";
import { Title } from "@components/typography";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

function NewProjectsL() {
  const { t } = useTranslation("", { keyPrefix: "landing.newProjects" });
  return (
    <div className="newProjects_l">
      <Container className="mb-[50px]">
        <Title className="text-center">{t("title")}</Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-[30px]">
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
        <Button size="large" shape="round" className="block mx-auto">
          {t("button")}
        </Button>
      </Container>
    </div>
  );
}

export default NewProjectsL;
