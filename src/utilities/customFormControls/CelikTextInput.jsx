import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

export default function CelikTextInput({ ...props }) {
  //reflect api
  const [field, meta] = useField(props);
  //console.log(meta);

  return (
      <FormField>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
  )
}
 