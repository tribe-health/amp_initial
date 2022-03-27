import { ContentListRelationFilter } from "../content/ContentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ContentTypeWhereInput = {
  contents?: ContentListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  schema?: JsonFilter;
};
