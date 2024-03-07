import { Field, Form, Formik } from "formik";
import * as yup from "yup";

const validation = yup.object({
  name: yup.string().required("Please enter the product name"),
  price: yup
    .number()
    .max(1000)
    .min(0)
    .required("Please enter the product price"),
  description: yup
    .string()
    .max(1000)
    .required("Please enter the product description"),
  impageUrl: yup.string().url().required("Please enter image url"),
});

const ProductForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        price: 0,
        description: "",
        imageUrl: "",
      }}
      validationSchema={validation}
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
