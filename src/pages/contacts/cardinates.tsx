import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Container from "@components/container";
import { Button } from "antd";
function Cardinates() {
  const customIcon = L.icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  return (
    <Container>
      <div className="flex flex-wrap justify-center gap-5 mb-[20px]">
        <Button className="rounded-sm">infinity</Button>
      </div>
      <MapContainer
        className="!mb-[50px] -z-[40]"
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
      </MapContainer>
    </Container>
  );
}

export default Cardinates;
