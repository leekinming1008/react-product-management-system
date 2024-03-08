import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const validation = Yup.object().shape({
  name: Yup.string().required("Please enter the product name"),
  price: Yup.number()
    .max(1000)
    .min(1)
    .required("Please enter the product price"),
  description: Yup.string()
    .max(1000)
    .required("Please enter the product description"),
  impageUrl: Yup.string().url().required("Please enter image url"),
});

const PreviewImageSection = styled.img`
  height: 300px;
`;

const ProductForm = () => {
  return (
    <Formik
      initialValues={{
        imageUrl: "",
        name: "",
        price: 0,
        description: "",
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <PreviewImageSection src={values.imageUrl} alt="invalid image url" />
          <p>Image url: </p>
          <Field name="imageUrl" type="url" />
          {errors.imageUrl && touched.imageUrl ? (
            <div>{errors.imageUrl}</div>
          ) : null}
          <p>Product name: </p>
          <Field name="name" type="text" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <p>Price: </p>
          <Field name="price" type="number" />
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <p>Description: </p>
          <Field name="description" type="text" />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <button type="submit">Create the new product</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
