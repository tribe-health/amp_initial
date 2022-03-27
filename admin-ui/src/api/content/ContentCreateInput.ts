import { ContentTypeWhereUniqueInput } from "../contentType/ContentTypeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ContentCreateInput = {
  contentType: ContentTypeWhereUniqueInput;
  data: InputJsonValue;
  name?: string | null;
};
