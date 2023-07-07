import SignOut from "components/Globals/SignOut";
import EditPageForm from "components/Pages/EditPageForm";
import { Page } from "components/Pages/PageForm";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { pocketRequest } from "utils/pocketRequestWrapper";
export const revalidate = 0;
const page = async ({ params }: { params: { url: string[] } }) => {
  const pocketOperations = async () => {
    const pageRecord = await pocket
      .collection("pages")
      .getFirstListItem(`url='/${params.url.join("/")}'`);
    return pageRecord;
  };
  const res: Page | -2 | 0 | -1 = await pocketRequest(pocketOperations);
  if (res === -1) {
    return revalidatePath("/");
  }
  if (res === 0) {
    return <SignOut />;
  }
  if (res === -2) {
    return notFound();
  }
  const { content, url, pagename, id, content_ar } = res;
  return <EditPageForm page={{ id, content, url, pagename, content_ar }} />;
};
export default page;
