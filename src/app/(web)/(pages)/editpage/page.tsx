import SignOut from "components/Globals/SignOut";
import EditPageForm from "components/Pages/EditPage/EditPageForm";
import pocket from "lib/PocketBaseSingleton";
import { notFound } from "next/navigation";
import { validateAuthentication } from "utils/AuthValidation";
export const revalidate = 0;
export const metadata = {
  title: "Edit Page | Post In",
};
const page = async ({ searchParams }: { searchParams: { url: string } }) => {
  const isValid = await validateAuthentication(`/editpage${searchParams.url}`);
  if (!isValid) {
    return <SignOut />;
  }
  try {
    const pageRecord = await pocket
      .collection("pages")
      .getFirstListItem(`url='${searchParams.url}'`);

    const { id, content, content_ar, pagename, url } = pageRecord;
    const page = { id, content, content_ar, pagename, url };
    return <EditPageForm page={page} />;
  } catch (error) {
    return notFound();
  }
};
export default page;
