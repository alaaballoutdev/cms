import { atom } from "recoil";
import { PageEntry } from "components/Pages/PagesTable/PagesTable";
export const pageItems = atom({
  key: "pages",
  default: [] as PageEntry[],
});
export const loadingPages = atom({
  key: "loadingPages",
  default: false,
});
