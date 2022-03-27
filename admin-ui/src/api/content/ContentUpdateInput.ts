import { ContentTypeWhereUniqueInput } from "../contentType/ContentTypeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ContentUpdateInput = {
  contentType?: ContentTypeWhereUniqueInput;
  data?: InputJsonValue;
  name?: string | null;
};
