import { Content } from "../content/Content";
import { JsonValue } from "type-fest";

export type ContentType = {
  contents?: Array<Content>;
  createdAt: Date;
  id: string;
  name: string;
  schema: JsonValue;
  updatedAt: Date;
};
