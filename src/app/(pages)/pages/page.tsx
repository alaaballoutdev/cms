import SignOut from "components/Globals/SignOut";
import PagesTable from "components/Pages/PagesTable";
import pocket from "lib/PocketBaseSingleton";
import { validateAuthentication } from "utils/AuthValidation";
export const metadata = {
  title: "Pages | Post In",
};

const page = async () => {
  const isValid: true | false | void = await validateAuthentication("/pages");
  if (!isValid) {
    return <SignOut />;
  }
  const pagesRecords = await pocket
    .collection("pages")
    .getFullList({ fields: "url,pagename,created" });
  const pages = pagesRecords.map((page) => {
    return {
      url: page.url,
      pagename: page.pagename,
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
