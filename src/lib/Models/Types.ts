export interface User {
  username: string;
  email: string;
}
export interface Page {
  pagename: string;
  url: string;
  content: string;
  content_ar: string;
}

interface BaseProperties {
  id: string;
  created: string;
}

export interface UserRecord extends User, BaseProperties {}
export interface PageRecord extends Page, BaseProperties {}

export function getTableEntry<T extends { id: string }>(record: T) {
  return {
    key: record.id,
    ...record,
  };
}
