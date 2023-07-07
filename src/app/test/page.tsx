import SignOut from "components/Globals/SignOut";
import { Page } from "components/Pages/PageForm";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { pocketRequest } from "utils/pocketRequestWrapper";
export const revalidate = 0;
const page = async ({
  searchParams,
}: {
  searchParams?: { lang: "en" | "ar"; url: string };
}) => {
  const pocketOperations = async () => {
    const pages = await pocket
      .collection("pages")
      .getFirstListItem(`url='/${searchParams?.url}'`, {
        fields: `url,pagename,${
          searchParams && searchParams.lang === "en" ? "content" : "content_ar"
        }, created`,
      });
    return pages;
  };
  const res: Page | -2 | -1 | 0 = await pocketRequest(pocketOperations);
  if (res === -1) {
    return revalidatePath("/test");
  }
  if (res === 0) {
    return <SignOut />;
  }
  if (res === -2) {
    return notFound();
  }

  return (
    <p
      dangerouslySetInnerHTML={{
        __html: searchParams?.lang === "en" ? res.content : res.content_ar,
      }}
    ></p>
  );
};

export default page;
