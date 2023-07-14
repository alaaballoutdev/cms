import { Col, Layout, Row, Typography } from "antd";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useMediaQuery } from "react-responsive";

const { Header } = Layout;

const HeadingStyle: React.CSSProperties = {
  marginTop: 0,
  fontSize: 20,
};

const HeaderBar = () => {
  const isDesktop = useMediaQuery({ query: "(min-width:600px)" });
  const HeaderStyle: React.CSSProperties = {
    padding: "10 0",
    background: "white",
    height: "12vh",
    fontSize: "20px",
    display: "flex",
    justifyContent: isDesktop ? "center" : "left",
    position: "relative",
  };

  return (
    <Header style={HeaderStyle}>
      <Link href="/">
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col>
            <Typography.Title level={1} style={HeadingStyle}>
              POST IN
            </Typography.Title>
          </Col>
        </Row>
      </Link>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", position: "absolute", right: "2vw" }}
      >
        <LogoutButton />
      </Row>
    </Header>
  );
};

export default HeaderBar;
