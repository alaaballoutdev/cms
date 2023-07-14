"use client";
import { Col, Row } from "antd";
import SignInBox from "./SignInBox";
import Image from "next/image";
import src from "assets/images/SignIn.jpg";
const SignIn = () => {
  return (
    <Row justify="space-evenly" align="middle" style={{ height: "100vh" }}>
      <Col>
        <Image height={400} width={400} alt="Sign In" src={src} />
      </Col>
      <Col>
        <SignInBox />
      </Col>
    </Row>
  );
};

export default SignIn;
