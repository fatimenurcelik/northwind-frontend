import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import CelikTextInput from "../utilities/customFormControls/CelikTextInput";

export default function ProductAdd() {
  const initialValues = {
   /*  categoryId: 0,
    id: 0, */
    name: "",
    unitPrice: 10,
   /*  unitsInStock: 0, */
  };
  //yup doğrulama yapmamızı sağlayan bir yapı
  const schema = Yup.object({
   /*  categoryId: Yup.number.required("Kategori id zorunlu"),
    id: Yup.number.required("Ürün id zorunlu"), */
    name: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  /*   unitsInStock: Yup.number.required("Ürün miktarı zorunlu"), */
  });

  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      //submit olduğunda bu fonksiyon çalışsın  onSubmit={()=>{}}
      onSubmit={(values)=>{
        console.log(values);
      }}
      >
        <Form className="ui form">
            <CelikTextInput name="name" placeholder="Ürün Adı"/>
            <CelikTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
           {/*  <FormField>
                <Field name="name" placeholder="Ürün Adı"></Field>
                <ErrorMessage name ="name" render={error =>
                    <Label pointing basic color="red" content={error}></Label>
                }></ErrorMessage>
            </FormField> */}
            {/* <FormField>
                <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                <ErrorMessage name ="unitPrice" render={error =>
                    <Label pointing basic color="red" content={error}></Label>
                }></ErrorMessage>
            </FormField> */}
            <Button color="green" type="submit">Ürün Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
