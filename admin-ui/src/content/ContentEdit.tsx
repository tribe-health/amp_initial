import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ContentTypeTitle } from "../contentType/ContentTypeTitle";

export const ContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
