"use client";
import { Divider, Form, Layout, Switch, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const SettingsPage = () => {
  const handleSwitchChange = (checked) => {
    console.log("Switch changed:", checked);
  };

  return (
    <Layout style={{ padding: "24px", minHeight: "calc(100vh - 64px)" }}>
      <Content
        style={{ background: "#fff", padding: "24px", borderRadius: "8px" }}
      >
        <Typography>
          <Title level={2}>Settings</Title>

          <Divider />

          <Form layout="vertical">
            <Form.Item label="Dark Mode">
              <Switch defaultChecked onChange={handleSwitchChange} />
            </Form.Item>

            <Form.Item label="Email Notifications">
              <Switch defaultChecked onChange={handleSwitchChange} />
            </Form.Item>

            <Form.Item label="Two-Factor Authentication">
              <Switch onChange={handleSwitchChange} />
            </Form.Item>

            <Form.Item label="Language">
              <select>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </Form.Item>

            <Form.Item label="Time Zone">
              <select>
                <option value="utc-5">UTC-5 (Eastern Standard Time)</option>
                <option value="utc-8">UTC-8 (Pacific Standard Time)</option>
              </select>
            </Form.Item>
          </Form>
        </Typography>
      </Content>
    </Layout>
  );
};

export default SettingsPage;
