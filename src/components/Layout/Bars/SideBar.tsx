import { useState } from "react";
import { Layout } from "antd";
import MenuBar from "./MenuBar";

const { Sider } = Layout;

const LogoStyle: React.CSSProperties = {
  textAlign: "center",
  color: "white",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      breakpoint="md"
      onCollapse={(value) => setCollapsed(value)}
    >
      <MenuBar />
    </Sider>
  );
};

export default SideBar;
