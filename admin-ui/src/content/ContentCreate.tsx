import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ContentTypeTitle } from "../contentType/ContentTypeTitle";

export const ContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contenttype.id"
          reference="ContentType"
          label="ContentType"
        >
          <SelectInput optionText={ContentTypeTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
