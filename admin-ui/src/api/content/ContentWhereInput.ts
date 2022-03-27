import { ContentTypeWhereUniqueInput } from "../contentType/ContentTypeWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContentWhereInput = {
  contentType?: ContentTypeWhereUniqueInput;
  data?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
