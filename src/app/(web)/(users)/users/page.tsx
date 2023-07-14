import SignOut from "components/Globals/SignOut";
import UsersTable from "components/Users/UsersTable/UsersTable";
import pocket from "lib/PocketBaseSingleton";
import { validateAuthentication } from "utils/AuthValidation";
export const revalidate = 0;

export const metadata = {
  title: "Users | Post In",
};

const page = async () => {
  const isValid = await validateAuthentication("/users");

  if (!isValid) {
    return <SignOut />;
  }
  const usersRecords = await pocket
    .collection("users")
    .getFullList({ fields: "username,created,email,id" });

  const users = usersRecords.map((user) => {
    return {
      username: user.username,
      created: new Date(user.created).toLocaleString(),
      key: user.id,
      email: user.email,
    };
  });
  return <UsersTable users={users} />;
};

export default page;
