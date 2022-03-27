import { ContentType as TContentType } from "../api/contentType/ContentType";

export const CONTENTTYPE_TITLE_FIELD = "name";

export const ContentTypeTitle = (record: TContentType): string => {
  return record.name || record.id;
};
