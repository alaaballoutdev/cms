import SignOut from "components/Globals/SignOut";
import PagesTable, { PageType } from "components/Pages/PagesTable";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
import { pocketRequest } from "utils/pocketRequestWrapper";
export const metadata = {
  title: "Pages | Post In",
};

const pocketOperations = async () => {
  const pages = await pocket
    .collection("pages")
    .getFullList({ fields: "url,pagename,created" });
  return pages;
};

const page = async () => {
  const res: PageType[] | -1 | 0 = await pocketRequest(pocketOperations);
  if (res === -1) {
    return revalidatePath("/");
  }
  if (res === 0) {
    return <SignOut />;
  }
  const pages = res.map((page) => {
    return {
      pagename: page.pagename,
      url: page.url,
      created: page.created,
    };
  });
  return (
    <>
      <PagesTable pages={pages} />
    </>
  );
};

export default page;
