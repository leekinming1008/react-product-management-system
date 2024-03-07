import { Field, Form, Formik } from "formik";
const AddProduct = () => {
  return (
    <>
      <Formik
        initialValues={{
          productName: "",
          price: 0,
          description: "",
          imageUrl: "",
        }}
        onSubmit={(values) => {}}
      >
        <Form>
          <p>Image url: </p>
          <Field name="imageUrl" type="url" />
          <p>Product name: </p>
          <Field name="productName" type="text" />
          <p>Price: </p>
          <Field name="price" type="number" />
          <p>Description: </p>
          <Field name="description" type="text" />
        </Form>
      </Formik>
    </>
  );
};

export default AddProduct;
