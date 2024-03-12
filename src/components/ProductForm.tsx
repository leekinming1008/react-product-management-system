import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import ErrorMessageContainer from "./ErrorMessageContainer";
import * as Yup from "yup";
import "../css/ProductForm.css";
import { createProduct } from "../api/productApi";

const validation = Yup.object().shape({
  title: Yup.string().required("Please enter the product name"),
  price: Yup.number()
    .max(1000, "The price should <1000")
    .min(1, "The price should >= 1")
    .required("Please enter the product price"),
  description: Yup.string()
    .max(1000, "The description should <= 1000 char")
    .required("Please enter the product short description"),
  category: Yup.string().required("Please enter the product long description"),
  image: Yup.string().url().required("Please enter image url"),
});

const PreviewImageSection = styled.img`
  height: 300px;
`;

const ProductFormContainer = styled.div`
  padding-left: 25%;
`;

const ProductForm = () => {
  return (
    <ProductFormContainer>
      <Formik
        initialValues={{
          image: "",
          title: "",
          price: 0,
          description: "",
          category: "",
          rating: { rate: 0, count: 0 },
        }}
        validationSchema={validation}
        onSubmit={async (values) => {
          console.log(values);
          await createProduct(values);
        }}
      >
        {({ errors, touched, values }) => (
          <div className="container">
            <div className="text">Add New Product Form</div>
            <Form>
              <div className="image-display form-row">
                <PreviewImageSection
                  src={values.image}
                  alt="invalid image url"
                />
              </div>
              <div className="form-row">
                <div className="input-data">
                  <Field name="image" type="url" />
                  {errors.image && touched.image ? (
                    <ErrorMessageContainer name="image" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Image URL</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <Field name="title" type="text" />
                  {errors.title && touched.title ? (
                    <ErrorMessageContainer name="title" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Product Name</label>
                </div>
                <div className="input-data">
                  <Field name="price" type="number" />
                  {errors.price && touched.price ? (
                    <ErrorMessageContainer name="price" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Price</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <Field name="category" type="text" />
                  {errors.category && touched.category ? (
                    <ErrorMessageContainer name="category" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Category</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <Field name="description" type="text" />
                  {errors.description && touched.description ? (
                    <ErrorMessageContainer name="description" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Description</label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner"></div>
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </ProductFormContainer>
  );
};

export default ProductForm;
