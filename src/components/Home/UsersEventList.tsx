"use client";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { CardSubHeader, CardTitle } from "components/Globals/ui/CardHeaders";

type Item = {
  email: string;
  date: string;
};

type Props = {
  title: string;
  monthYear: string;
  list: Item[];
};

function UsersEventList({ title, monthYear, list }: Props) {
  return (
    <Card sx={{ m: 2 }}>
      <CardHeader
        title={<CardTitle title={title} />}
        subheader={<CardSubHeader subheader={monthYear} />}
      />
      <CardContent>
        <List>
          {list.map((item) => (
            <ListItem key={item.date}>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText>{item.email}</ListItemText>
              <ListItemText>
                <p style={{ color: "grey", fontSize: 12, marginLeft: 30 }}>
                  {item.date}
                </p>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default UsersEventList;
