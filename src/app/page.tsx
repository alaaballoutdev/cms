import SignOut from "components/Globals/SignOut";
import StatisticsCards from "components/Home/StatisticsCards";
import UsersEventList from "components/Home/UsersEventList";
import { revalidatePath } from "next/cache";
import { getSignIns, getSignUps, getUsers } from "utils/UsersStatistics";
import { pocketRequest } from "utils/pocketRequestWrapper";
export const revalidate = 0;
export const metadata = {
  title: "Dashboard | Post In",
};
type PocketResponse = {
  totalUsers: number;
  activeUsers: number;
  signIns: number;
  signUps: number;
};
async function pocketOperations() {
  const [{ activeUsers, totalUsers }, signIns, signUps] = await Promise.all([
    getUsers(),
    getSignIns(),
    getSignUps(),
  ]);
  return {
    totalUsers,
    activeUsers,
    signIns,
    signUps,
  };
}

export default async function Home() {
  const res: PocketResponse | 0 | -1 = await pocketRequest(pocketOperations);
  if (res === -1) {
    return revalidatePath("/");
  }
  if (res === 0) {
    return <SignOut />;
  }

  return (
    <>
      <StatisticsCards
        totalUsers={res.totalUsers}
        activeUsers={res.activeUsers}
        signIns={res.signIns}
        signUps={res.signUps}
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
