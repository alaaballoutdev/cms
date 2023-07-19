import SignOut from "components/Globals/SignOut";
import EditPageForm from "components/Pages/EditPage/EditPageForm";
import { Database } from "lib/Models/Database";
import { notFound } from "next/navigation";
import { validateAuthentication } from "lib/auth/AuthValidation";
import { PageRecord } from "lib/Models/Types";
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
    const pocket = Database.getConnection();
    const page = await pocket
      .collection("pages")
      .getFirstListItem<PageRecord>(`url='${searchParams.url}'`);

    return <EditPageForm page={page} />;
  } catch (error) {
    return notFound();
  }
};
export default page;
