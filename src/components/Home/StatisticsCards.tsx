import { AccountCircle } from "components/Globals/ui/Material";
import InfoCard from "components/Globals/ui/InfoCard";
import { monthNames } from "utils/monthNames";
type StatisticsCardsProps = {
  totalUsers: number;
  activeUsers: number;
  signIns: number;
  signUps: number;
};

export default function StatisticsCards({
  totalUsers,
  activeUsers,
  signIns,
  signUps,
}: StatisticsCardsProps) {
  const date = new Date();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const monthYear = month + " " + year;
  const CardsData = [
    {
      date: "All Time",
      title: "TotalUsers",
      icon: <AccountCircle />,
      text: totalUsers,
    },
    {
      date: monthYear,
      title: "Active Users",
      icon: <AccountCircle />,
      text: activeUsers,
    },
    {
      date: monthYear,
      title: "Sign-Ins",
      icon: <AccountCircle />,
      text: signIns,
    },
    {
      date: monthYear,
      title: "Sign-Ups",
      icon: <AccountCircle />,
      text: signUps,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {CardsData.map((card) => (
        <InfoCard
          key={card.title}
          date={card.date}
          title={card.title}
          icon={card.icon}
          text={card.text}
        />
      ))}
    </div>
  );
}
