"use client";

import { SubmitHandler } from "react-hook-form";
import PageForm, { Page } from "./PageForm";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
const EditPageForm = ({ page }: { page: Page }) => {
  const [failed, setFailed] = useState(false);
  const router = useRouter();
  const onSubmit: SubmitHandler<Page> = async (data) => {
    const res = await fetch("http://localhost:3000/api/pages/edit", {
      method: "POST",
      body: JSON.stringify({ ...data, id: page.id }),
    });
    if (res.status === 200) {
      router.push("/pages");
      return;
    }
    setFailed(true);
  };

  return (
    <>
      <Typography variant="h3" align="center" sx={{ mt: 5 }}>
        Edit Page
      </Typography>
      {failed && (
        <Typography variant="body1" color="red">
          Something went wrong
        </Typography>
      )}
      <PageForm page={page} onSubmit={onSubmit} />
    </>
  );
};

export default EditPageForm;
