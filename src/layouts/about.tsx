import Container from "@components/container";
import { Title } from "@components/typography";
import img1 from "@assets/build-1.jpg";
import img2 from "@assets/build-2.jpg";
import img3 from "@assets/build-3.jpg";
function About() {
  return (
    <>
      <Container className="container mx-auto mb-[50px]">
        <Title className="!text-[28px] !text-main md:!text-[35px]">
          Biz Haqimizda
        </Title>
        <div className="!mb-10 text-center">
          <p className="text-lg text-gray-600">
            Biz qurilish sohasida yillar davomida yuqori sifatli xizmatlar
            ko‘rsatib kelayotgan kompaniyamiz. Bizning maqsadimiz mijozlarimiz
            uchun eng yaxshi xizmatlarni taqdim etishdir.
          </p>
        </div>
        <div className="mb-10 services">
          <Title className="!text-[28px] md:!text-[35px]">
            Bizning Xizmatlarimiz
          </Title>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <li className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={img1}
                className="w-full aspect-[3/1.8] object-cover rounded-lg"
                alt="not img"
              />
              <h3 className="mt-3 mb-2 text-xl font-bold text-gray-800">
                Uy Qurilishi
              </h3>
              <p className="text-gray-600">
                Eng zamonaviy uslubda sifatli uylarni qurish.
              </p>
            </li>
            <li className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={img2}
                className="w-full aspect-[3/1.8] object-cover rounded-lg"
                alt="not img"
              />
              <h3 className="mt-3 mb-2 text-xl font-bold text-gray-800">
                Ta'mirlash
              </h3>
              <p className="text-gray-600">
                Ichki va tashqi ta'mirlash xizmatlari.
              </p>
            </li>
            <li className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={img3}
                className="w-full aspect-[3/1.8] object-cover rounded-lg"
                alt="not img"
              />
              <h3 className="mt-3 mb-2 text-xl font-bold text-gray-800">
                Landshaft Dizayn
              </h3>
              <p className="text-gray-600">
                Hovlingizni go‘zallik bilan to‘ldirish.
              </p>
            </li>
          </ul>
        </div>
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Bizning Yondashuvimiz
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Har bir loyiha – bu biz uchun san’at asari. Biz mijozlarimizning
              talablariga mos ravishda maxsus echimlar yaratamiz. Har bir
              tafsilotga e’tibor qaratish va eng yuqori sifatli materiallardan
              foydalanish bizning yondashuvimizning ajralmas qismidir.
            </p>
            <p className="text-lg text-gray-600">
              Ish jarayonida mijozlar bilan doimiy muloqotda bo‘lamiz va ular
              bilan har bir qadamni kelishib ishlaymiz. Biz bilan ishlash – bu
              sifat va ishonchni tanlashdir.
            </p>
          </div>
          <div>
            <img
              src="https://avatars.mds.yandex.net/i?id=0b913f70dd833d76b3f338696b5ca4b05a9dc176-8901029-images-thumbs&n=13"
              alt="Construction Project"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
