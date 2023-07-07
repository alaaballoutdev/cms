import SignOut from "components/Globals/SignOut";
import EditPageForm from "components/Pages/EditPageForm";
import pocket from "lib/PocketBaseSingleton";
import { notFound } from "next/navigation";
import { validateAuthentication } from "utils/AuthValidation";
export const revalidate = 0;
const page = async ({ params }: { params: { url: string[] } }) => {
  const isValid = await validateAuthentication(
    `/editpage/${params.url.join("/")}`
  );
  if (!isValid) {
    return <SignOut />;
  }
  try {
    const pageRecord = await pocket
      .collection("pages")
      .getFirstListItem(`url='/${params.url.join("/")}'`);

    const { id, content, content_ar, pagename, url } = pageRecord;
    const page = { id, content, content_ar, pagename, url };
    return <EditPageForm page={page} />;
  } catch (error) {
    return notFound();
  }
};
export default page;
