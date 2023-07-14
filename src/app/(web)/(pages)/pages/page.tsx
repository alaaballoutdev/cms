import SignOut from "components/Globals/SignOut";
import PagesTable from "components/Pages/PagesTable/PagesTable";
import pocket from "lib/PocketBaseSingleton";
import { validateAuthentication } from "utils/AuthValidation";
export const revalidate = 0;
export const metadata = {
  title: "Pages | Post In",
};

const page = async () => {
  const isValid: true | false | void = await validateAuthentication("/pages");
  if (!isValid) {
    return <SignOut />;
  }

  return <PagesTable />;
};

export default page;
