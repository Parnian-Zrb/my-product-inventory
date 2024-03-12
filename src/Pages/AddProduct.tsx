// import "react-app-polyfill/ie11";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { RatingType } from "../types/products";

interface Values {
  title: string;
  description: string;
  price: string;
  category: string;
  rating: string;
}

const AddProduct = () => {
  return (
    <div className="signup-form">
      <h1>Add Your Product Here</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          category: "",
          rating: "5",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Title" />

          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            placeholder="description"
          />

          <label htmlFor="price">price</label>
          <Field id="price" name="price" placeholder="Price" type="price" />
          <label htmlFor="category">category</label>
          <Field id="category" name="Category" placeholder="Category" />
          <label htmlFor="rating">Rating</label>
          <Field id="rating" name="Rating" placeholder="Rating" />

          <button type="submit">ADD</button>
        </Form>
      </Formik>
    </div>
  );
};

ReactDOM.render(<AddProduct />, document.getElementById("root"));
export default AddProduct;

// import { Form, Container, Button } from "react-bootstrap";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// function AddProduct() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       description: "",
//       quantity: "",
//       price: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Required"),
//       price: Yup.number().min(1, "Must be more than 1$").required("Required"),
//       quantity: Yup.number().min(1, "Must be more than 1").required("Required"),
//       description: Yup.string().required("Required"),
//     }),
//     onSubmit: (initialValues) => {
//       // Here, you handle what you want to do with the form data when the form is submitted.
//       // For instance, sending the data to a server.
//       console.log(initialValues);
//     },
//   });

//   return (
//     <Container fluid className="signup-form">
//       <Form method="post" action="#" onSubmit={formik.handleSubmit}>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             id="name"
//             name="name"
//             type="text"
//             placeholder="Enter your name"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <Form.Text className="text-muted">{formik.errors.name}</Form.Text>
//           ) : null}
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Price</Form.Label>
//           <Form.Control
//             id="price"
//             name="price"
//             type="price"
//             placeholder="Enter price"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.price}
//           />
//           {formik.touched.price && formik.errors.price ? (
//             <Form.Text className="text-muted">{formik.errors.price}</Form.Text>
//           ) : null}
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             id="quantity"
//             name="quantity"
//             type="text"
//             placeholder="Enter quantity"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.quantity}
//           />
//           {formik.touched.quantity && formik.errors.quantity ? (
//             <Form.Text className="text-muted">
//               {formik.errors.quantity}
//             </Form.Text>
//           ) : null}
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             id="description"
//             name="description"
//             placeholder="Enter Product Description"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.description}
//           />
//           {formik.touched.description && formik.errors.description ? (
//             <Form.Text className="text-muted">
//               {formik.errors.description}
//             </Form.Text>
//           ) : null}
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default AddProduct;
