import { Input, InputProps } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps extends InputProps {
  refs: UseFormRegisterReturn<string>;
}

const CustomInput = ({ refs, ...props }: CustomInputProps) => {
  const InputStyle = {
    m: "auto",
    mb: 5,
    display: "block",
    width: "60%",
  };

  return <Input sx={InputStyle} {...props} {...refs} />;
};

export default CustomInput;
