import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import "../css/ProductForm.css";
import { createProduct, getProduct } from "../api/productApi";
import ErrorMessageContainer from "./ErrorMessageContainer";

const validation = Yup.object().shape({
  image: Yup.string().url().required("Please enter image url"),
  factory: Yup.string().required("Please enter the factory name"),
  name: Yup.string().required("Please enter the name"),
  price: Yup.number()
    .max(1000, "The price should <1000")
    .min(1, "The price should >= 1")
    .required("Please enter the product price"),
  description: Yup.string()
    .max(1000, "The description should <= 1000 char")
    .required("Please enter the description"),
  airline: Yup.string().required("Please enter the airline"),
  year: Yup.number().required("Please enter the year"),
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
          factory: "",
          name: "",
          price: 0,
          description: "",
          airline: "",
          year: 0,
        }}
        validationSchema={validation}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await createProduct(values);
            if (response.status == 201) {
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
                  <Field name="name" type="text" />
                  {errors.name && touched.name ? (
                    <ErrorMessageContainer name="name" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Aircraft Name</label>
                </div>
                <div className="input-data">
                  <Field name="factory" type="text" />
                  {errors.factory && touched.factory ? (
                    <ErrorMessageContainer name="factory" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Factory</label>
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
                  <Field name="airline" type="text" />
                  {errors.airline && touched.airline ? (
                    <ErrorMessageContainer name="airline" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Airline</label>
                </div>
                <div className="input-data">
                  <Field name="year" type="number" />
                  {errors.year && touched.year ? (
                    <ErrorMessageContainer name="year" />
                  ) : null}
                  <div className="underline"></div>
                  <label>Production Year</label>
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
