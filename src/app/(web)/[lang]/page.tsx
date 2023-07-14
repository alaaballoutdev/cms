import SignOut from "components/Globals/SignOut";
import pocket from "lib/PocketBaseSingleton";
import { notFound } from "next/navigation";
import { validateAuthentication } from "utils/AuthValidation";
export const revalidate = 10;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { url: string };
}) {
  const page = await pocket
    .collection("pages")
    .getFirstListItem(`url='/${searchParams?.url}'`, {
      fields: `pagename`,
    });

  return {
    title: `${page.pagename} | Post In`,
  };
}

const page = async ({
  searchParams,
  params,
}: {
  searchParams?: { url: string };
  params: { lang: "en" | "ar" };
}) => {
  console.log(params);
  const isValid = await validateAuthentication("/test");

  if (!isValid) {
    return <SignOut />;
  }
  try {
    const page = await pocket
      .collection("pages")
      .getFirstListItem(`url='/${searchParams?.url}'`, {
        fields: `url,pagename,${
          params && params.lang === "ar" ? "content_ar" : "content"
        }, created`,
      });

    return (
      <p
        dangerouslySetInnerHTML={{
          __html: params?.lang === "ar" ? page.content_ar : page.content,
        }}
      ></p>
    );
  } catch (error) {
    return notFound();
  }
};

export default page;
