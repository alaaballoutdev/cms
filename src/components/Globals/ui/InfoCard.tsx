"use client";

import { Card, CardContent, CardHeader } from "@mui/material";

const InfoCard = ({
  icon,
  title,
  text,
  date,
}: {
  icon: React.ReactNode;
  title: string;
  text: number;
  date: string;
}) => {
  return (
    <Card sx={{ m: 3 }}>
      <CardHeader title={title} avatar={icon} subheader={date} />
      <CardContent>
        <p className="text-xl font-bold">{text} </p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
