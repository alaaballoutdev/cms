"use client";
import { SubmitHandler } from "react-hook-form";
import PageForm, { Page } from "./PageForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Typography } from "@mui/material";
const CreatePageForm = () => {
  const router = useRouter();
  const [failed, setFailed] = useState(false);
  const onSubmit: SubmitHandler<Page> = async (data) => {
    const res = await fetch("http://localhost:3000/api/pages/create", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      router.push("/pages");
      return;
    }
    setFailed(true);
  };
  return (
    <>
      <Typography variant="h3" align="center">
        Create Page
      </Typography>
      {failed && (
        <Typography variant="body1" color="red">
          Something went wrong
        </Typography>
      )}
      <PageForm onSubmit={onSubmit} />
    </>
  );
};

export default CreatePageForm;
