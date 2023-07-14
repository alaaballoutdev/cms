import { PageEntryType } from "components/Pages/PagesTable/PagesTable";
import { atom } from "recoil";
export const pageItems = atom({
  key: "pages",
  default: [] as PageEntryType[],
});
export const loadingPages = atom({
  key: "loadingPages",
  default: false,
});
