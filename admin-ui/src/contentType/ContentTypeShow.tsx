import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTENTTYPE_TITLE_FIELD } from "./ContentTypeTitle";

export const ContentTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Schema" source="schema" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Content"
          target="ContentTypeId"
          label="Contents"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ContentType"
              source="contenttype.id"
              reference="ContentType"
            >
              <TextField source={CONTENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Data" source="data" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
