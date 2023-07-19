import SignOut from "components/Globals/SignOut";
import { Database } from "lib/Models/Database";
import { notFound } from "next/navigation";
import { validateAuthentication } from "lib/auth/AuthValidation";
import { Page } from "lib/Models/Types";
export const revalidate = 10;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { url: string };
}) {
  const pocket = Database.getConnection();
  const page = await pocket
    .collection("pages")
    .getFirstListItem<Page>(`url='/${searchParams?.url}'`, {
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
  params: { lang: string };
}) => {
  const isValid = await validateAuthentication("/test");

  if (!isValid) {
    return <SignOut />;
  }
  const pocket = Database.getConnection();
  try {
    const page = await pocket
      .collection("pages")
      .getFirstListItem<Page>(`url='/${searchParams?.url}'`, {
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
