import { useNavigate } from "react-router-dom";
import { Button, Space, Typography } from "antd";

import { dom } from "@/shared/lib";

import styles from "./styles.module.scss";

const HomePage = () => {
  dom.useTitle("MG Control | Главная");

  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <Typography.Title level={4}>Выращивайте микрозелень без усилий в домашних условиях 🌱</Typography.Title>
      <Typography.Text className={styles.text}>
        <b>MicroGreen Box</b> - автоматизированное устройство, позволяющее быстро вырастить любую микрозелень!
      </Typography.Text>
      <Space>
        <Button type="primary" onClick={() => navigate("/activate")}>
          Активировать устройство
        </Button>
        <Button onClick={() => navigate("/login")}>Войти</Button>
      </Space>
    </div>
  );
};

export default HomePage;
