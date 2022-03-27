import { ContentCreateNestedManyWithoutContentTypesInput } from "./ContentCreateNestedManyWithoutContentTypesInput";
import { InputJsonValue } from "../../types";

export type ContentTypeCreateInput = {
  contents?: ContentCreateNestedManyWithoutContentTypesInput;
  name: string;
  schema: InputJsonValue;
};
