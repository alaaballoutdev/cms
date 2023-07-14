import { Card } from "antd";
import React from "react";
import { useMediaQuery } from "react-responsive";

const FormCard = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width:1000px)",
  });

  return (
    <Card
      style={{
        width: isDesktop ? "60%" : "100%",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {children}
    </Card>
  );
};

export default FormCard;
