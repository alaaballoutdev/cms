"use client";
import { Textarea } from "@mui/joy";
import { Box, Button } from "@mui/material";
import CustomInput from "components/Globals/ui/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
export interface Page {
  pagename: string;
  url: string;
  content: string;
  id: string;
  content_ar: string;
}
interface PageFormProps {
  page?: Page;
  onSubmit: SubmitHandler<Page>;
}

const PageForm = ({ page, onSubmit }: PageFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Page>({
    defaultValues: page,
  });

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          width: "60%",
          m: "auto",
          mt: 15,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomInput
          placeholder="Page Name"
          refs={register("pagename", { required: true })}
          error={!!errors.pagename}
        />

        <CustomInput
          placeholder="URL"
          refs={register("url", { required: true })}
          error={!!errors.url}
        />
        <Textarea
          sx={{ width: "60%", margin: "auto", minHeight: 300 }}
          placeholder="Create your content"
          {...register("content", { required: true })}
          error={!!errors.content}
        />
        <Textarea
          sx={{ width: "60%", margin: "auto", minHeight: 300 }}
          placeholder="Create your content"
          {...register("content_ar", { required: true })}
          error={!!errors.content_ar}
        />
        <div style={{ width: "30%", margin: "20px auto 50px" }}>
          <Button fullWidth type="submit" variant="outlined">
            Save
          </Button>
        </div>
      </Box>
    </>
  );
};

export default PageForm;
