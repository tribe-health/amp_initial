import { SortOrder } from "../../util/SortOrder";

export type ContentTypeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  schema?: SortOrder;
  updatedAt?: SortOrder;
};
