"use client";
import { Button, Form, Input } from "antd";
import { Page } from "lib/Models/Types";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const Paragraph = dynamic(() => import("antd/es/typography/Paragraph"));
type Props = {
  buttonText: string;
  onFinish: (values: Page) => void;
  failed: boolean;
  page?: Page;

  loading: boolean;
};

const PageForm = ({
  failed,
  buttonText,
  onFinish,
  page,

  loading,
}: Props) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (page) {
      form.setFieldsValue(page);
    }
  }, []);

  return (
    <>
      <Paragraph style={{ color: "red", textAlign: "center", height: 30 }}>
        {failed ? "Something went wrong! Try another url." : ""}
      </Paragraph>
      <Form
        layout="vertical"
        form={form}
        name="control-ref"
        onFinish={onFinish}
        style={{}}
      >
        <Form.Item
          name="pagename"
          label="Page Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="url" label="url" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="content" label="Content" rules={[{ required: true }]}>
          <Input.TextArea style={{ minHeight: 150 }} />
        </Form.Item>
        <Form.Item
          name="content_ar"
          label="Content AR"
          rules={[{ required: true }]}
        >
          <Input.TextArea style={{ minHeight: 150 }} />
        </Form.Item>
        <Form.Item style={{ margin: "auto", width: "50%" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            loading={loading}
          >
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PageForm;
