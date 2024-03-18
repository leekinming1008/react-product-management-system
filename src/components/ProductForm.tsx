import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import "../css/ProductForm.css";
import { createProduct, getProduct } from "../api/productApi";
import ErrorMessageContainer from "./ErrorMessageContainer";

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
  const { id } = useParams();
  //const [currentProduct, setCurrentProduct] = useState<ProductType>();
  // const SetupDefaultValue = () => {
  //   console.log("Enter the set up default value function. ");
  //   if (currentProduct) {
  //   }
  //   return null;
  // };
  useEffect(() => {
    console.log("this id is " + id);
    const fatchProduct = async (id: string) => {
      try {
        const response = await getProduct(id);
        if (response.status == 200) {
          //setCurrentProduct(response.data);
        }
      } catch (err) {
        console.log("Have error during the delete process", err);
      }
    };
    id && fatchProduct(id);
  }, []);
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
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await createProduct(values);
            if (response.status == 200) {
              alert("You have successfully add the product!! :)");
              console.log(response.data);
            }
          } catch (error) {
            console.error(
              "There have error when try to create the product!",
              error
            );
          } finally {
            resetForm();
          }
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
