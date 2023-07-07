import pocket from "../lib/PocketBaseSingleton";

export async function pocketRequest(request: () => any) {
  try {
    await pocket.admins.authRefresh();
    if (pocket.authStore.isValid) {
      return await request();
    } else {
      return -1;
    }
  } catch (error: any) {
    console.log(error);
    if (error.status !== 401) return -2;
    return 0;
  }
}
