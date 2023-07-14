"use client";
import { List } from "antd";
type UsersListProps = {
  data: {
    text: string;
    avatar: React.ReactNode;
  }[];
  header: React.ReactNode;
};

const UsersList = ({ data, header }: UsersListProps) => {
  return (
    <List
      header={header}
      bordered
      dataSource={data}
      style={{ backgroundColor: "white", border: "none" }}
      renderItem={(item) => (
        <List.Item
          style={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <List.Item.Meta avatar={item.avatar} style={{ width: 20 }} />
          {item.text}
        </List.Item>
      )}
    />
  );
};

export default UsersList;
