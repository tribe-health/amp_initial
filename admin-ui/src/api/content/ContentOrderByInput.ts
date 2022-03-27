import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  contentTypeId?: SortOrder;
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
