import SignOut from "components/Globals/SignOut";
import { getSignIns, getSignUps, getUsers } from "utils/UsersStatistics";
import { validateAuthentication } from "utils/AuthValidation";
import StatisticCard from "components/Dashboard/StatisticCard";
import UsersList from "components/Dashboard/UsersList";
import {
  LoginOutlined,
  UserOutlined,
  UserAddOutlined,
} from "components/Dashboard/Icons";
import { monthNames } from "utils/monthNames";
import { Col, Row, Title } from "components/Dashboard/Antd";

export const revalidate = 0;
export const metadata = {
  title: "Dashboard | Post In",
};

export default async function Home() {
  const isValid = await validateAuthentication("/");

  if (!isValid) {
    return <SignOut />;
  }

  const [{ activeUsers, totalUsers }, signIns, signUps] = await Promise.all([
    getUsers(),
    getSignIns(),
    getSignUps(),
  ]);
  const date = new Date();
  const MonthYear = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  const cardsData = [
    {
      title: "Total Users",
      subtitle: "All Time",
      count: totalUsers,
    },
    {
      title: "Active Users",
      subtitle: MonthYear,
      count: activeUsers,
    },
    {
      title: "Sign-Ins",
      subtitle: MonthYear,
      count: signIns,
    },
    {
      title: "Sign-Ups",
      subtitle: MonthYear,
      count: signUps,
    },
  ];
  const data = [
    {
      text: "alaaballoutdev@gmail.com",
      avatar: <UserOutlined />,
    },
  ];

  return (
    <>
      <Row justify="space-evenly" wrap gutter={[16, 24]}>
        {cardsData.map((card) => (
          <Col key={card.title} span={4.5}>
            <StatisticCard
              title={card.title}
              subtitle={card.subtitle}
              count={card.count}
            />
          </Col>
        ))}
      </Row>
      <Row
        justify="space-evenly"
        wrap
        gutter={[16, 24]}
        style={{ marginTop: 70 }}
      >
        <Col>
          <UsersList
            header={
              <Title level={4}>
                <LoginOutlined /> Recent Sign-Ins
              </Title>
            }
            data={data}
          />
        </Col>
        <Col>
          <UsersList
            header={
              <Title level={4}>
                <UserAddOutlined /> Recent Sign-Ups
              </Title>
            }
            data={data}
          />
        </Col>
      </Row>
    </>
  );
}
