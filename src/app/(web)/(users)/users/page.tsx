import SignOut from "components/Globals/SignOut";
import UsersTable from "components/Users/UsersTable/UsersTable";
import { Database } from "lib/Models/Database";
import { UserRecord, getTableEntry } from "lib/Models/Types";
import { validateAuthentication } from "lib/auth/AuthValidation";
export const revalidate = 0;

export const metadata = {
  title: "Users | Post In",
};
const page = async () => {
  const isValid = await validateAuthentication("/users");

  if (!isValid) {
    return <SignOut />;
  }
  const pocket = Database.getConnection();
  const usersRecords = await pocket
    .collection("users")
    .getFullList<UserRecord>({ fields: "username,created,email,id" });

  const users = usersRecords.map((user) => {
    return getTableEntry<UserRecord>(user);
  });
  return <UsersTable users={users} />;
};

export default page;
