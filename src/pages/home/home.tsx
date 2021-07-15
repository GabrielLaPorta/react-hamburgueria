/* import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik"; */
import { Grid } from "@material-ui/core";
/* import Select from 'react-select'
import * as yup from 'yup'; */
import axios from "axios";
import Menu from '../../components/menu';

import './home.css'
/* import { useState } from "react";
 */

let breadRows: any[] = [];
let saladRows: any[] = [];
let beefRows: any[] = [];
let sauceRows: any[] = [];
let cheeseRows: any[] = [];
    
const loadIngredients = () => {
    axios.get('http://localhost:3333/burger-ingredients', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('app-token')
        }
        }).then((response) => {
            const { data } = response;
            if (data) {
                breadRows = data.bread.map((bread)=> ({value: bread.id, label: bread.name}));
                saladRows = data.salad;
                beefRows = data.beef;
                sauceRows = data.sauce;
                cheeseRows = data.cheese;
            }
        }).catch((error) => {
            console.log(error)
        })
}


const Home = (props) => {
/* 
    loadIngredients();
    const handleSubmit = values => {
        axios.post('http://localhost:3333/user', values
            ).then((response) => {
                props.history.push('/login');
            }).catch((error) => {
                console.log(error)
            })
    }
    const [salads, setSalads] = useState([]);
    const [bread, setBread] = useState(undefined);

    const handleChangeSalads = values => {
        console.log(salads)
        console.log(values);
        setSalads(values.target.values);
    }
    const handleChange = (event) => {
        props.setState({ [event.target.name]: event.target.value });
    }

    const fieldRequiredMessage: string = '*campo obrigatório'

    const validations = yup.object().shape({
        name: yup.string().required(fieldRequiredMessage),
        username: yup.string().required(fieldRequiredMessage),
        cep: yup.string().min(8,'o cep deve ter 8 digitos').max(8, 'o cep deve ter 8 digitos').required(fieldRequiredMessage),
        email: yup.string().email('email inválido').required(fieldRequiredMessage),
        password: yup.string().min(8, 'mínimo 8 dígitos').required(fieldRequiredMessage),
        passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Senhas diferentes')
    }) */
    return (
        <>
            <Menu />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <h1>Montar Burguer</h1>
                {/* <Formik 
                    initialValues={{}} 
                    onSubmit={handleSubmit}
                    validationSchema={validations}>
                    <Form className="Form">
                        <div className="Form-Group">
                            <InputLabel id="label">Nome do burguer</InputLabel>
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
                            <label id="bread">Pão</label>
                            <Select options={breadRows} 
                                value={bread} 
                                onChange={handleChange}
                                placeholder="Nome"/>
                            
                            <ErrorMessage 
                                component="span" 
                                name="bread" 
                                className="Form-Error"/>
                        </div>
                        <div className="Form-Group">
                            <InputLabel id="cheese">Queijo</InputLabel>
                            <Select labelId="cheese" 
                                id="select-cheese" 
                                value="20"
                                className="Form-Field">
                                {cheeseRows && (
                                    cheeseRows.map((row: any) => (
                                        <MenuItem value={row.id}>{row.name}</MenuItem>
                                    ))
                                )}
                            </Select>
                            <ErrorMessage 
                                component="span" 
                                name="cheese" 
                                className="Form-Error"/>
                        </div>
                        <div className="Form-Group">
                            <InputLabel id="beef">Carne</InputLabel>
                            <Select labelId="beef" 
                                id="select-beef" 
                                value="20"
                                className="Form-Field">
                                {beefRows && (
                                    beefRows.map((row: any) => (
                                        <MenuItem value={row.id}>{row.name}</MenuItem>
                                    ))
                                )}
                            </Select>
                            <ErrorMessage 
                                component="span" 
                                name="beef" 
                                className="Form-Error"/>
                        </div>
                        <div className="Form-Group">
                            <InputLabel id="sauce">Temperos</InputLabel>
                            <Select labelId="sauce" 
                                id="select-sauce" 
                                value="20"
                                className="Form-Field">
                                {sauceRows && (
                                    sauceRows.map((row: any) => (
                                        <MenuItem value={row.id}>{row.name}</MenuItem>
                                    ))
                                )}
                            </Select>
                            <ErrorMessage 
                                component="span" 
                                name="sauce" 
                                className="Form-Error"/>
                        </div>
                        <div className="Form-Group">
                            <InputLabel id="salad">Saladas</InputLabel>
                            <select
                                id="select-salad" 
                                className="Form-Field"
                                multiple
                                value={salads}
                                onChange={handleChangeSalads}
                            >
                                {saladRows && (
                                    saladRows.map((row: any) => (
                                        <option value={row.id}>{row.name}</option>
                                    ))
                                )}
                            </select>
                            <ErrorMessage 
                                component="span" 
                                name="salad" 
                                className="Form-Error"/>
                        </div>
                        <button className="Form-Btn" type="submit">
                            Criar
                        </button>
                    </Form>
                </Formik> */}
            </Grid>
            </>
    )
}

export default Home