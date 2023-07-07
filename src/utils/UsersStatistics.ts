import pocket from "lib/PocketBaseSingleton";

export async function getUsers() {
  const users = await pocket
    .collection("users")
    .getFullList({ fields: "id,active" });
  return {
    totalUsers: users.length,
    activeUsers: users.filter((user) => user.active).length,
  };
}
export async function getSignIns() {
  const date = new Date();
  const signIns = await pocket.logs.getRequestsList(1, 700, {
    filter: `url=	'/api/collections/users/auth-with-password' && status=200 &&created>='01-${
      (date.getMonth() + 1) % 11
    }-2023'`,
    fields: "url,status,create",
  });

  return signIns.items.length;
}
export async function getSignUps() {
  const date = new Date();
  const signUps = await pocket.logs.getRequestsList(1, 900, {
    filter: `url='/api/collections/users/records'&& method='POST'&& status=200&& created>='01-${
      (date.getMonth() + 1) % 11
    }-2023'`,
    fields: "url,create,method",
  });
  return signUps.items.length;
}
