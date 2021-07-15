import React from "react";

import { Grid } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from "formik";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Menu from '../../components/menu';
import './ingredient'
import { useState } from "react";

const useStyles = makeStyles({
    table: {
      width: 300,
    },
    paper: {
        width: '50%',
        height: 300,
    }
});




const Ingredients = () => {
    const [breadRows, setBreadRows] = useState([]);
    const [saladRows, setSaladRows] = useState([]);
    const [beefRows, setBeefRows] = useState([]);
    const [sauceRows, setSauceRows] = useState([]);
    const [cheeseRows, setCheeseRows] = useState([]);
    const loadIngredients = (values: any | null = null) => {
        axios.get('http://localhost:3333/burger-ingredients', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('app-token')
            },
            params: {
                searchTerm: values?.searchTerm
            }
            }).then((response) => {
                const { data } = response;
                console.log(data)
                if (data) {
                    setBreadRows(data.bread);
                    setSaladRows(data.salad);
                    setBeefRows(data.beef);
                    setSauceRows(data.sauce);
                    setCheeseRows(data.cheese);
                }
            }).catch((error) => {
                console.log(error)
            })
    }
    const classes = useStyles();

    return (
        <>
        <Menu />
        <h1>Lista de Ingredientes</h1>
        <Formik 
            initialValues={{}} 
            onSubmit={loadIngredients}>
            <Form className="Form">
                <div className="Form-Group">
                    <Field
                        name="searchTerm" 
                        placeholder="busca"
                        className="Form-Field"/>
                </div>
                <button className="Form-Btn" type="submit">
                    buscar
                </button>
            </Form>
        </Formik>
        <Grid
            container
            alignItems="center">
            {beefRows.length > 0 && (<Grid item >
                <h2>Carnes</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Ingrediente</TableCell>
                                <TableCell align="left">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {beefRows.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">R$ {row.value}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>)}
            {breadRows.length > 0 && (<Grid item >
                <h2>Pães</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Ingrediente</TableCell>
                                <TableCell align="left">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {breadRows.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">R$ {row.value}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>)}
            {saladRows.length > 0 && (<Grid item >
                <h2>Saladas</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Ingrediente</TableCell>
                                <TableCell align="left">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {saladRows.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">R$ {row.value}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>)}
            {cheeseRows.length > 0 && (<Grid item >
                <h2>Queijos</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Ingrediente</TableCell>
                                <TableCell align="left">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {cheeseRows.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">R$ {row.value}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>)}
            {sauceRows.length > 0 && (<Grid item >
                <h2>Temperos</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Ingrediente</TableCell>
                                <TableCell align="left">Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {sauceRows.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">R$ {row.value}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>)}
        </Grid>
        </>
    )
}

export default Ingredients