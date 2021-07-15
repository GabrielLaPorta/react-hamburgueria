import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Grid } from "@material-ui/core";
import * as yup from 'yup';
import axios from "axios";
import Menu from '../../components/menu';

import './register.css'
import { useState } from "react";

const Register = (props) => {
    const token = localStorage.getItem('app-token')

    if(token) {
        props.history.push('/');
    }

    const handleSubmit = values => {
        axios.post('http://localhost:3333/user', values
            ).then((response) => {
                props.history.push('/login');
            }).catch((error) => {
                console.log(error)
                setHasError(true);
                setTimeout(()=> setHasError(false), 5000)
            })
    }

    const [hasError, setHasError] = useState(false);
    const fieldRequiredMessage: string = '*campo obrigatório'

    const validations = yup.object().shape({
        name: yup.string().required(fieldRequiredMessage),
        username: yup.string().required(fieldRequiredMessage),
        cep: yup.string().min(8,'o cep deve ter 8 digitos').max(8, 'o cep deve ter 8 digitos').required(fieldRequiredMessage),
        email: yup.string().email('email inválido').required(fieldRequiredMessage),
        password: yup.string().min(8, 'mínimo 8 dígitos').required(fieldRequiredMessage),
        passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Senhas diferentes')
    })
    return (
        <>
            <Menu />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <h1>Registro de Usuário</h1>
                <Formik 
                    initialValues={{}} 
                    onSubmit={handleSubmit}
                    validationSchema={validations}>
                    <Form className="Form">
                        <div className="Form-Group">
                            <Field
                                name="name" 
                                placeholder="Nome"
                                className="Form-Field"/>
                            <ErrorMessage 
                                component="span" 
                                name="name" 
                                className="Form-Error"/>
                        </div>
                        <div className="Form-Group">
                            <Field
                                name="username" 
                                placeholder="Nome de usuário"
                                className="Form-Field"/>
                            <ErrorMessage 
                                component="span" 
                                name="username" 
                                className="Form-Error"/>
                        </div>
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
                                name="cep" 
                                placeholder="cep"
                                className="Form-Field"/>
                            <ErrorMessage 
                                component="span" 
                                name="cep" 
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
                        <div className="Form-Group">
                            <Field
                                type="password"
                                placeholder="Confirme sua senha"
                                name="passwordConfirm" 
                                className="Form-Field"/>
                            <ErrorMessage 
                                component="span" 
                                name="passwordConfirm" 
                                className="Form-Error"/>
                            {hasError && (
                                <span className="Login-Error">Falha na criação de usuário</span>
                            )}
                        </div>
                        <button className="Form-Btn" type="submit">
                            Criar
                        </button>
                    </Form>
                </Formik>
            </Grid>
        </>
    )
}

export default Register