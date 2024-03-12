import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import ErrorMessageContainer from "./ErrorMessageContainer";
import "../css/ProductForm.css";

const validation = Yup.object().shape({
  name: Yup.string().required("Please enter the product name"),
  price: Yup.number()
    .max(1000, "The price should <1000")
    .min(1, "The price should >= 1")
    .required("Please enter the product price"),
  shortDescription: Yup.string()
    .max(1000, "The description should <= 1000 char")
    .required("Please enter the product short description"),
  longDescription: Yup.string().required(
    "Please enter the product long description"
  ),
  imageUrl: Yup.string().url().required("Please enter image url"),
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
          imageUrl: "",
          name: "",
          price: 0,
          shortDescription: "",
          longDescription: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <div className="container">
            <div className="text">Add New Product Form</div>
            <Form>
              <div className="image-display form-row">
                <PreviewImageSection
                  src={values.imageUrl}
                  alt="invalid image url"
                />
              </div>
              <div className="form-row">
                <div className="input-data">
                  <Field name="imageUrl" type="url" />
                  {errors.imageUrl && touched.imageUrl ? (
                    <ErrorMessageContainer name="imageUrl" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Image URL</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <Field name="name" type="text" />
                  {errors.name && touched.name ? (
                    <ErrorMessageContainer name="name" />
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
                  <Field name="shortDescription" type="text" />
                  {errors.shortDescription && touched.shortDescription ? (
                    <ErrorMessageContainer name="shortDescription" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Short Description</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <Field name="longDescription" type="text" />
                  {errors.longDescription && touched.longDescription ? (
                    <ErrorMessageContainer name="longDescription" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Detail Description</label>
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
