import * as Yup from "yup";
import "./AddProduct.css";
import { useFormik } from "formik";
import { Form, Container, Button } from "react-bootstrap";
import { createProduct } from "../api/productApi";

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      rating: "",
      image: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string(),
      price: Yup.number()
        .positive("Price must be positive")
        .required("Price is required"),
      category: Yup.string().required("Category is required"),
      rating: Yup.number()
        .integer("Rating must be an integer")
        .min(0, "Too low!")
        .max(5, "Too high!"),
    }),
    // onSubmit: async (values) => {
    //   console.log(values);
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createProduct(values);
        console.log("Product added successfully", response.data);
        alert("Product added successfully");
      } catch (erorr) {
        console.error("Failed to add Product", Error);
      } finally {
        resetForm({});
      }
    },
  });

  return (
    <Container className="container">
      <h1>Add Your Product Here</h1>

      <Form method="post" action="#" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <label htmlFor="title">Title</label>
          <Form.Control
            id="title"
            name="title"
            type="text"
            placeholder="Enter product title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <Form.Text className="text-muted">{formik.errors.title}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <label htmlFor="description">Description</label>
          <Form.Control
            id="description"
            name="description"
            type="text"
            placeholder="Enter your description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <Form.Text className="text-muted">
              {formik.errors.description}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <label htmlFor="price">Price: $</label>
          <Form.Control
            id="price"
            name="price"
            type="text"
            placeholder="Enter product price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <Form.Text className="text-muted">{formik.errors.price}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <label htmlFor="category">Category:</label>
          <Form.Control
            id="category"
            name="category"
            type="text"
            placeholder="Enter product category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <Form.Text className="text-muted">
              {formik.errors.category}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <label htmlFor="rating">Rating:</label>
          <Form.Control
            id="rating"
            name="rating"
            type="text"
            placeholder="Enter product rating"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rating}
          />
          {formik.touched.rating && formik.errors.rating ? (
            <Form.Text className="text-muted">{formik.errors.rating}</Form.Text>
          ) : null}
        </Form.Group>
        {/* <Form.Group>
          <label htmlFor="Image">Image:</label>
          <Form.Control
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.rating && formik.errors.image ? (
            <Form.Text className="text-muted">{formik.errors.image}</Form.Text>
          ) : null}
        </Form.Group> */}

        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
