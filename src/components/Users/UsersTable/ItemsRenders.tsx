import { Typography } from "antd";

export const renderEmail = (item?: string) => {
  if (item) {
    return item;
  }
  return (
    <Typography.Text
      style={{
        color: "grey",
      }}
    >
      N/A
    </Typography.Text>
  );
};
