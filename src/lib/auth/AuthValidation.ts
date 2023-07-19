import { revalidatePath } from "next/cache";
import { Database } from "lib/Models/Database";
export async function validateAuthentication(url?: string) {
  const pocket = Database.getConnection();
  try {
    await pocket.admins.authRefresh();
    if (pocket.authStore.isValid) {
      return true;
    } else {
      if (url) {
        return revalidatePath(url);
      } else return false;
    }
  } catch (error) {
    return false;
  }
}
