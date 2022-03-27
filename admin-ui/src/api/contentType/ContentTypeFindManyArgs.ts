import { ContentTypeWhereInput } from "./ContentTypeWhereInput";
import { ContentTypeOrderByInput } from "./ContentTypeOrderByInput";

export type ContentTypeFindManyArgs = {
  where?: ContentTypeWhereInput;
  orderBy?: Array<ContentTypeOrderByInput>;
  skip?: number;
  take?: number;
};
