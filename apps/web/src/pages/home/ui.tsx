import { useNavigate } from "react-router-dom";
import { Button, Layout, Space, Typography } from "antd";

import { dom } from "@/shared/lib";
import { Content } from "@/shared/ui";

const HomePage = () => {
  dom.useTitle("MG Control | Home");

  const navigate = useNavigate();

  return (
    <Layout>
      <Content.Center
        style={{
          gap: "0.25em",
        }}
      >
        <Typography.Title level={4}>Выращивайте микрозелень без усилий в домашних условиях 🌱</Typography.Title>
        <Typography.Text style={{ marginBottom: "0.8em" }}>
          <b>MicroGreen Box</b> - автоматизированное устройство, позволяющее быстро вырастить любую микрозелень!
        </Typography.Text>
        <Space size="middle">
          <Button type="primary" onClick={() => navigate("/activate")}>
            Активировать устройство
          </Button>
          <Button onClick={() => navigate("/login")}>Войти</Button>
        </Space>
      </Content.Center>
    </Layout>
  );
};

export default HomePage;
