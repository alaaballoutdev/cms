"use client";
import { useState } from "react";
import PageForm from "../PageForm";
import { useRouter } from "next/navigation";
import { Typography } from "antd";
import FormCard from "../FormCard";
import { useRecoilState } from "recoil";
import { pageItems } from "lib/recoil-atoms";
import { Page, PageRecord } from "lib/Models/Types";

const EditPageForm = ({ page }: { page: PageRecord }) => {
  const { Title } = Typography;
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useRecoilState(pageItems);
  const router = useRouter();
  const onFinish = async (data: Page) => {
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/pages/edit", {
      method: "PUT",
      body: JSON.stringify({ ...data, id: page.id }),
    });
    setLoading(false);
    if (res.status === 200) {
      const index = pages.findIndex((pageItem) => pageItem.key === page.id);
      const oldRecord = pages.find((pageItems) => pageItems.key === page.id);
      if (oldRecord) {
        const updatedRecord = { ...oldRecord, data };
        setPages((old) => [
          ...old.slice(0, index),
          updatedRecord,
          ...old.slice(index + 1),
        ]);
      }
      router.push("/pages");
      return;
    }
    setFailed(true);
  };
  return (
    <FormCard>
      <Title level={2} style={{ textAlign: "center" }}>
        Edit Your Page
      </Title>

      <PageForm
        buttonText="Save"
        onFinish={onFinish}
        failed={failed}
        page={page}
        loading={loading}
      />
    </FormCard>
  );
};

export default EditPageForm;
