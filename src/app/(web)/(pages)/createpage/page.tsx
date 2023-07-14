import SignOut from "components/Globals/SignOut";
import CreatePageForm from "components/Pages/CreatePage/CreatePageForm";
import { validateAuthentication } from "utils/AuthValidation";

const page = async () => {
  const isValid = await validateAuthentication("/createPage");
  if (!isValid) {
    return <SignOut />;
  }
  return <CreatePageForm />;
};
export default page;
