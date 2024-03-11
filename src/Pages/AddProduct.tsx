import { Form, Container, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

// export default AddProduct;
function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      quantity: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          /^[a-zA-Z0-9 ]+$/,
          "Name must be letters, dashes, numbers, or spaces"
        )
        .required("Required"),
      price: Yup.string().min(1, "Must be more than 1$"),
      quantity: Yup.number()

        .min(1, "Must be more than 1")
        .required("Required"),
      description: Yup.string()
        .matches(
          /^[a-zA-Z0-9 ]+$/,
          "Description must be letters, dashes, numbers, or spaces"
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Here, you handle what you want to do with the form data when the form is submitted.
      // For instance, sending the data to a server.
      console.log(values);
    },
  });

  return (
    <Container fluid className="signup-form">
      <Form method="post" action="#" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Form.Text className="text-muted">{formik.errors.name}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            id="price"
            name="price"
            type="price"
            placeholder="Enter price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <Form.Text className="text-muted">{formik.errors.price}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            id="quantity"
            name="quantity"
            type="text"
            placeholder="Enter quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <Form.Text className="text-muted">
              {formik.errors.quantity}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            id="description"
            name="description"
            type="url"
            placeholder="Enter your Blog URL"
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
