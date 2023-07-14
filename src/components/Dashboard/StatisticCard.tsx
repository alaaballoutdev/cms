"use client";
import { Card, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Meta } = Card;
const StatisticCard = ({
  title,
  subtitle,
  count,
}: {
  title: string;
  subtitle: string;
  count: number;
}) => {
  return (
    <Card
      style={{
        width: 200,
      }}
    >
      <Meta avatar={<UserOutlined />} title={title} description={subtitle} />
      <Typography.Title level={4}>{count}</Typography.Title>
    </Card>
  );
};

export default StatisticCard;
