"use client";
import { Divider, Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HelpPage = () => {
  return (
    <Layout style={{ padding: "24px", minHeight: "calc(100vh - 64px)" }}>
      <Content
        style={{ background: "#fff", padding: "24px", borderRadius: "8px" }}
      >
        <Typography>
          <Title level={2}>Help Center</Title>

          <Divider />

          <Title level={3}>Frequently Asked Questions</Title>

          <Paragraph>
            <strong>Q: How do I create an account?</strong>
            <br />
            A: To create an account, click on the "Sign Up" button and follow
            the registration process.
          </Paragraph>

          <Paragraph>
            <strong>Q: How do I reset my password?</strong>
            <br />
            A: Click on "Forgot Password" on the login page and follow the
            instructions to reset your password.
          </Paragraph>

          <Divider />

          <Title level={3}>Contact Us</Title>

          <Paragraph>
            If you need further assistance or have specific inquiries, please
            email us at <a href="mailto:help@example.com">help@example.com</a>.
          </Paragraph>
        </Typography>
      </Content>
    </Layout>
  );
};

export default HelpPage;
