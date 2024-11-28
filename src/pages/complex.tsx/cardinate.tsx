import Container from "@components/container";
import { Title } from "@components/typography";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import img1 from "@assets/build-1.jpg";

import { Button } from "antd";
import { useTranslation } from "react-i18next";
function Cardinate() {
  const { t } = useTranslation("", { keyPrefix: "complex.map" });
  const customIcon = L.icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  return (
    <div>
      <Container className="!-z-20">
        <Title>{t("title")}</Title>
        <MapContainer
          className="relative !z-0"
          center={[41.2995, 69.2401]} // Markazni koordinatalari (Toshkent)
          zoom={13} // Xarita masshtabi
          style={{ height: "500px", width: "100%" }} // Xarita o'lchamlari
        >
          {/* Xarita qatlamini qo'shish */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker qo'shish */}
          <Marker position={[41.2995, 69.2401]} icon={customIcon}>
            <Popup>Bu Toshkent shahrining markazi.</Popup>
          </Marker>
          <Card className="absolute hidden md:block  bottom-3 left-3 z-[500] w-[300px]" />
        </MapContainer>
        <Card className="!block  md:hidden my-[40px]" />
      </Container>
    </div>
  );
}

export default Cardinate;

function Card({ className }: { className: string }) {
  return (
    <div
      className={` overflow-hidden bg-white rounded-lg shadow-xl ${className}`}
    >
      <div className="relative">
        <img
          src={img1}
          alt="Location"
          className="object-cover w-full !aspect-[3/1.7]"
        />
      </div>
      <div className="p-4">
        <Title className="!text-[20px]"> Расположение</Title>
        <p className="flex items-center mb-2 text-sm text-gray-500">
          <span className="text-lg material-icons">
            <IoLocationOutline />
          </span>
          <span>г. Ташкент, ул. С. Машхадий, д. 3</span>
        </p>
        <p className="flex items-center mb-2 text-sm text-gray-500">
          <span className="text-lg material-icons">
            <IoCallOutline />
          </span>
          <span>+998 (78) 113-03-74</span>
        </p>
        <p className="mb-4 text-sm text-gray-500">Номер Call-центра:</p>

        <Button type="primary" className="w-full py-2 font-semibold text-white">
          Оставить заявку
        </Button>
      </div>
    </div>
  );
}
