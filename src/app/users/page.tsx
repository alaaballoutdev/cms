import { Add } from "components/Globals/ui/Material";
import SignOut from "components/Globals/SignOut";
import CustomButton from "components/Globals/ui/CustomButton";
import { People } from "components/Globals/ui/Material";
import UsersTable from "components/Users/UsersTable";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
import { pocketRequest } from "utils/pocketRequestWrapper";
export const revalidate = 0;
type Props = {};

export const metadata = {
  title: "Users | Post In",
};
type PocketResponse = { username: string; created: string }[];

const pocketOperations = async () => {
  const users = await pocket
    .collection("users")
    .getFullList({ fields: "username,created" });
  return users;
};

const page = async (props: Props) => {
  const res: PocketResponse | 0 | -1 = await pocketRequest(pocketOperations);
  if (res === -1) {
    return revalidatePath("/");
  }
  if (res === 0) {
    return <SignOut />;
  }
  const users = res.map((user) => {
    return { username: user.username, created: user.created };
  });
  return (
    <>
      <h1 className="text-center mt-16 text-4xl">
        <People fontSize="large" />
        {" Users"}
      </h1>
      <div className="w-2/3 m-auto relative">
        <CustomButton text={"create"} endIcon={<Add />} color="secondary" />
      </div>
      <UsersTable users={users} />
    </>
  );
};

export default page;
