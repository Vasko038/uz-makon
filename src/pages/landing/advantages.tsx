import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import { useTranslation } from "react-i18next";

function Advantages() {
  const { t } = useTranslation("", { keyPrefix: "landing.advantages" });
  return (
    <div className="mb-[50px]">
      <Container>
        <div className="bg-blue-50 py-[40px] px-[30px]">
          <Title className="!text-[28px] md:!text-[35px]">{t("title")}</Title>
          <div className="flex flex-col gap-5 lg:items-center lg:flex-row">
            <div className="lg:w-[40%]">
              <Title className="!text-blue-300 !text-sm !text-[25px]">
                Basedka
              </Title>
              <Paragraph className="font-semibold opacity-75">
                Yaqinlaringiz bilan qiziqarli suhbatlar qurishingiz uchun yopiq
                hovlida besedkalar mavjud. Bu sizga do'stlaringiz va oilangiz
                bilan birgalikda vaqt o'tkazishingiz uchun qulayliklarni
                yaratadi.
              </Paragraph>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <img
                className="object-cover w-full rounded-xl"
                src="https://avatars.mds.yandex.net/i?id=1c8227d27740e61b1040e1dacc8f78709821e9e5-9046135-images-thumbs&n=13"
              />
              <img
                className="object-cover w-full rounded-xl"
                src="https://avatars.mds.yandex.net/i?id=1c8227d27740e61b1040e1dacc8f78709821e9e5-9046135-images-thumbs&n=13"
              />
              <img
                className="object-cover w-full rounded-xl"
                src="https://avatars.mds.yandex.net/i?id=1c8227d27740e61b1040e1dacc8f78709821e9e5-9046135-images-thumbs&n=13"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Advantages;
