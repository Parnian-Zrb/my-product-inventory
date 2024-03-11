// // import { Formik } from "formik";
// // import * as Yup from "yup";
// import { IconButton } from "@mui/material";

// const ProductForm = () => {
//   return <IconButton />;
// };

// export default ProductForm;
// import "react-app-polyfill/ie11";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  productName: string;
  price: string;
}

const App = () => {
  return (
    <div>
      <h1>Add a new product</h1>
      <Formik
        initialValues={{
          productName: "",
          price: "",
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
          <label htmlFor="productName">Product Name</label>
          <Field
            id="productName"
            name="productName"
            placeholder="Product Name"
          />

          <label htmlFor="price">Price</label>
          <Field id="price" name="price" placeholder="Price" />

          {/* <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          /> */}

          <button type="submit">Add Product</button>
        </Form>
      </Formik>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
