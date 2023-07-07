import { revalidatePath } from "next/cache";
import pocket from "../lib/PocketBaseSingleton";

export async function validateAuthentication(url?: string) {
  try {
    await pocket.admins.authRefresh();
    if (pocket.authStore.isValid) {
      return true;
    } else {
      if (url) {
        return revalidatePath(url);
      } else return false;
    }
  } catch (error: any) {
    return false;
  }
}
