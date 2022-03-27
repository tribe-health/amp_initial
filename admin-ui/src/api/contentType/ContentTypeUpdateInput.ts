import { ContentUpdateManyWithoutContentTypesInput } from "./ContentUpdateManyWithoutContentTypesInput";
import { InputJsonValue } from "../../types";

export type ContentTypeUpdateInput = {
  contents?: ContentUpdateManyWithoutContentTypesInput;
  name?: string;
  schema?: InputJsonValue;
};
