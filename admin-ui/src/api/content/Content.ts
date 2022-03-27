import { ContentType } from "../contentType/ContentType";
import { JsonValue } from "type-fest";

export type Content = {
  contentType?: ContentType;
  createdAt: Date;
  data: JsonValue;
  id: string;
  name: string | null;
  updatedAt: Date;
};
