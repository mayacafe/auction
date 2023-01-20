import React, {useContext, useState} from "react";
import {
  
      Router,
      
    } from "react-router-dom";
    import axios from 'axios';
    import { Formik, Form } from "formik";
    import * as Yup from "yup";
export default function form() {
     
            const authenticate = useContext(AuthContext);
            const [serverState, setServerState] = useState();
            const handleServerResponse = (ok, msg) => {
              setServerState({ok, msg});
            };
      
            const handleOnSubmit = (values, actions) => {
              axios({
                method: "POST",
                url: "http://localhost:5000/api/users/login",
                data: values,
                auth: {
                  email,
                  password
                }
              })
              .then(response => {
                actions.setSubmitting(false);
                actions.resetForm();
                handleServerResponse(true, "Logged In!");
              })
              .catch(error => {
                actions.setSubmitting(false);
                handleServerResponse(false, error.response.data.error);
              });
              authenticate.login();
              Router.push("/")
            };
          
  return (
      <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string(),
        password: Yup.string(),
      })}
      onSubmit={handleOnSubmit}
    >
      {({ isSubmitting }) => (
      <Form>
        <Field
          name="email"
          type="email"
          fullWidth
          component={TextField}
          variant="outlined"
          label="Email"
        />
        <Box pt={1}>
        <Field
          name="password"
          type="password"
          fullWidth
          component={TextField}
          variant="outlined"
          label="Password"
        />
         </Box>
        <Box pt={2}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            disabled={isSubmitting}
          >
            Submit
          </Button>
          {serverState && (
          <Typography className={!serverState.ok ? "errorMsg" : ""}>
            {serverState.msg}
          </Typography>
        )}
        </Box>
      </Form>
      )}
    </Formik>
  )
}
