"use client";
import { Button, Card, Form, Input, Typography } from "antd";
import { useSearchParams } from "next/navigation";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";

const SignInBox = () => {
  const searchParams = useSearchParams();
  const callbackUrl: string | null = searchParams.get("callbackUrl");
  const error: string | null = searchParams.get("error");
  console.log(callbackUrl);
  const onFinish = (values: { username: string; password: string }) => {
    signIn("credentials", {
      username: values.username,
      password: values.password,
      callbackUrl: callbackUrl ? callbackUrl : "/",
    });
  };

  return (
    <Card
      style={{
        width: 400,
      }}
    >
      <Typography.Title style={{ textAlign: "center", marginTop: 0 }}>
        Post In
      </Typography.Title>
      <Typography.Paragraph
        style={{ color: "red", height: 30, textAlign: "center" }}
      >
        {error ? "Please enter valid credentials" : ""}
      </Typography.Paragraph>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username or Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignInBox;
