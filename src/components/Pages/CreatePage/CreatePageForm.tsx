"use client";
import { useState } from "react";
import PageForm, { PageFormData } from "../PageForm";
import { useRouter } from "next/navigation";
import { Typography } from "antd";
import FormCard from "../FormCard";
import { useSetRecoilState } from "recoil";
import { pageItems } from "lib/recoil-atoms";
import { PageEntryType } from "../PagesTable/PagesTable";

const CreatePageForm = () => {
  const { Title } = Typography;
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const setPages = useSetRecoilState(pageItems);
  const router = useRouter();
  const onFinish = async (data: PageFormData) => {
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/pages/create", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.status === 200) {
      const { id, created }: { id: string; created: string } = await res.json();
      const createdRecord: PageEntryType = {
        key: id,
        created,
        ...data,
      } as PageEntryType;
      setPages((old) => [...old, createdRecord]);
      router.push("/pages");
      return;
    }
    setFailed(true);
  };

  return (
    <FormCard>
      <Title level={2} style={{ textAlign: "center" }}>
        Create Your Page
      </Title>

      <PageForm
        buttonText="Create"
        onFinish={onFinish}
        failed={failed}
        loading={loading}
      />
    </FormCard>
  );
};

export default CreatePageForm;
