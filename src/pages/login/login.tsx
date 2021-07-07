import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Grid } from "@material-ui/core";
import * as yup from 'yup'
import axios from "axios";

import './login.css'


class Login extends React.Component {
    handleSubmit: (values: any) => void;
    validations: any;
    constructor(props) {
        super(props);

        this.state = { counter: 0 };
        this.handleSubmit = values => {
            axios.post('localhost:3333/')
        };
        this.validations = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(8).required()
        })
      }

    render() {
        return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <h1>Login</h1>
                <Formik 
                    initialValues={{}} 
                    onSubmit={this.handleSubmit}
                    validationSchema={this.validations}>
                    <Form className="Form">
                        <div className="Form-Group">
                            <Field
                                name="email" 
                                placeholder="Email"
                                className="Form-Field"/>
                            <ErrorMessage 
                                component="span" 
                                name="email" 
                                className="Form-Error"/>
                        </div>
                        <div className="Form-Group">
                            <Field
                                type="password"
                                placeholder="Senha"
                                name="password" 
                                className="Form-Field"/>
                            <ErrorMessage 
                                component="span" 
                                name="password" 
                                className="Form-Error"/>
                        </div>
                        <button className="Form-Btn" type="submit">
                            Login
                        </button>
                    </Form>
                </Formik>
            </Grid>
        );
    }
}
export default Login