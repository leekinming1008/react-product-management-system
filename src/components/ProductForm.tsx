import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

const validation = Yup.object({
  name: Yup.string().required("Please enter the product name"),
  price: Yup.number()
    .max(1000)
    .min(0)
    .required("Please enter the product price"),
  description: Yup.string()
    .max(1000)
    .required("Please enter the product description"),
  impageUrl: Yup.string().url().required("Please enter image url"),
});

const ProductForm = () => {
  return (
    <Formik
      initialValues={{
        imageUrl: "",
        name: "",
        price: 0,
        description: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <p>Image url: </p>
        <Field name="imageUrl" type="url" />
        <p>Product name: </p>
        <Field name="name" type="text" />
        <p>Price: </p>
        <Field name="price" type="number" />
        <p>Description: </p>
        <Field name="description" type="text" />
        <button type="submit">Create the new product</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
