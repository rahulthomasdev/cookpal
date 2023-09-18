"use client";
import { Card, FloatButton, Layout } from "antd";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import arcades from "../../../public/customMapData.json";

import { AimOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import L from "leaflet";
import { useEffect, useState } from "react";

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});
async function getLocation(defaultLocation) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = [latitude, longitude];
          console.log("Current location", location);
          resolve(location);
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

const TestPage = () => {
  const [center, setCenter] = useState([9.381056671761778, 76.57339828991795]); //Default Location

  const RecenterAutomatically = ({ center }) => {
    const map = useMap();
    map.setView(center);
    return null;
  };

  useEffect(() => {
    getLocation(center)
      .then((location) => {
        setCenter(location);
        console.log("Initial Center", location);
      })
      .catch((error) => {
        console.error("Failed to get location:", error);
      });
  }, []);
  const handleLocateClick = async () => {
    try {
      const location = await getLocation(center);
      setCenter(location);
      console.log("New Center", location);
    } catch (error) {
      console.error("Failed to get location:", error);
    }
  };

  return (
    <Layout>
      {console.log("initial center", center)}
      <MapContainer
        className="full-height-map"
        center={center}
        zoom={6}
        minZoom={3}
        maxZoom={19}
        maxBounds={[
          [-85.06, -180],
          [85.06, 180],
        ]}
        scrollWheelZoom={true}
      >
        <FloatButton
          className="__locate_btn bg-blue-300"
          onClick={() => handleLocateClick()}
          icon={<AimOutlined />}
        />
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        <MarkerClusterGroup>
          {arcades.features.map((arcade, index) => (
            <Marker
              key={arcade.properties["@id"]}
              position={[
                arcade.geometry.coordinates[1],
                arcade.geometry.coordinates[0],
              ]}
              icon={icon}
            >
              <Popup>
                <Card
                  className="m-0"
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <RecenterAutomatically center={center} />
      </MapContainer>
    </Layout>
  );
};
export default TestPage;
