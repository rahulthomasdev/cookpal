"use client";
import {
  CompassOutlined,
  HeartOutlined,
  HomeOutlined,
  ProfileOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Spin, theme } from "antd";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../styles/antd.min.css";
import "./globals.css";
import "./globals.scss";
const { Header, Content, Footer, Sider } = Layout;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cookpal",
  description: "Cookpal",
};
const items = [
  getItem("Home", 1, <HomeOutlined className="!text-lg" />, "/"),
  getItem("Explore", 2, <CompassOutlined className="!text-lg" />, "/explore"),
  getItem("Community", 3, <TeamOutlined className="!text-lg" />, "/community"),
  getItem("Favorites", 4, <HeartOutlined className="!text-lg" />, "/favorites"),
  getItem("Help", 5, <QuestionCircleOutlined className="!text-lg" />, "/help"),
  getItem("Settings", 6, <SettingOutlined className="!text-lg" />, "/settings"),
  getItem("Profile", 7, <ProfileOutlined className="!text-lg" />, "/profile"),
  getItem("Test", 8, <ProfileOutlined className="!text-lg" />, "/test"),
];
function getItem(label, key, icon, link) {
  return {
    key,
    icon,
    link,
    label,
  };
}
export default function RootLayout({ children }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScreenSize = () => {
      if (window.innerWidth < 500) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleScreenSize();

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const clickHandler = (info) => {
    const selectedKey = parseInt(info.key, 10);
    const selectedItem = items.find((item) => item.key === selectedKey);
    console.log(selectedKey);
    console.log(items);
    console.log(selectedItem);
    router.push(selectedItem.link);
  };
  useEffect(() => clickHandler({ key: 1 }), []);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {!mounted && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
            className="bg-white"
          >
            (
            <Spin
              tip="Loading..."
              size="large"
              delay={0}
              className="inline-flex items-center justify-center text-pink-500"
            >
              <div className="flex justify-center items-center "> </div>
            </Spin>
            )
          </div>
        )}
        {mounted && (
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              className="!bg-white"
            >
              <div className="demo-logo-vertical text-black flex items-center justify-center">
                <img src="./logo.png" height={50} width={100} />
              </div>
              <Menu
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                className=" !text-base !text-slate-500 px-4 py-5"
                onClick={clickHandler}
              />
            </Sider>
            {children}
          </Layout>
        )}
      </body>
    </html>
  );
}
