"use client";

import { Button } from "@mui/material";

type Props = {
  text: string;
  endIcon: React.ReactNode;
  color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
};

const CustomButton = ({ text, endIcon, color }: Props) => {
  return (
    <Button
      endIcon={endIcon}
      color={color}
      sx={{ position: "absolute", right: 0 }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
