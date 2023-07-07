import SignOut from "components/Globals/SignOut";
import pocket from "lib/PocketBaseSingleton";
import { notFound } from "next/navigation";
import { validateAuthentication } from "utils/AuthValidation";
export const revalidate = 10;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang: "en" | "ar"; url: string };
}) {
  const page = await pocket
    .collection("pages")
    .getFirstListItem(`url='/${searchParams?.url}'`, {
      fields: `url,pagename,${
        searchParams && searchParams.lang === "en" ? "content" : "content_ar"
      }, created`,
    });

  return {
    title: `${page.pagename} | Post In`,
  };
}

const page = async ({
  searchParams,
}: {
  searchParams?: { lang: "en" | "ar"; url: string };
}) => {
  const isValid = await validateAuthentication("/test");

  if (!isValid) {
    return <SignOut />;
  }
  try {
    const page = await pocket
      .collection("pages")
      .getFirstListItem(`url='/${searchParams?.url}'`, {
        fields: `url,pagename,${
          searchParams && searchParams.lang === "en" ? "content" : "content_ar"
        }, created`,
      });
    return (
      <p
        dangerouslySetInnerHTML={{
          __html: searchParams?.lang === "en" ? page.content : page.content_ar,
        }}
      ></p>
    );
  } catch (error) {
    return notFound();
  }
};

export default page;
