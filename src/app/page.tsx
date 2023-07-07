import SignOut from "components/Globals/SignOut";
import StatisticsCards from "components/Home/StatisticsCards";
import UsersEventList from "components/Home/UsersEventList";
import { getSignIns, getSignUps, getUsers } from "utils/UsersStatistics";
import { validateAuthentication } from "utils/AuthValidation";
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

  return (
    <>
      <StatisticsCards
        totalUsers={totalUsers}
        activeUsers={activeUsers}
        signIns={signIns}
        signUps={signUps}
      />
      <div className="flex flex-wrap justify-center items-center mt-20">
        <UsersEventList
          title="Recent Sign-ins"
          monthYear="June 2023"
          list={[{ date: "01-01-2023", email: "alaaballout@example.com" }]}
        />
        <UsersEventList
          title="Recent Sign-ups"
          monthYear="June 2023"
          list={[{ date: "01-01-2023", email: "alaaballout@example.com" }]}
        />
      </div>
    </>
  );
}
