"use client";

import { Layout } from "antd";
import SideBar from "./Bars/SideBar";
import HeaderBar from "./Bars/HeaderBar";
import BreadCrumb from "./BreadCrumb";

const { Content, Footer } = Layout;

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout>
        <HeaderBar />

        <Content style={{ width: "90%", margin: "auto" }}>
          <BreadCrumb />
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>Post In ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default GlobalLayout;
