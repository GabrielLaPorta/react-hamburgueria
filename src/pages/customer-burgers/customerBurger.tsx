import React from "react";
import Menu from '../../components/menu';
import { Grid } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './customerBurger'

let burgers: any[] = [];

const useStyles = makeStyles({
    accordion: {
      width: 1000,
    },
    total: {
        '> span':{
            fontWeight: "bold"

        }
    }
});

const loadBurgers = () => {
    axios.get('http://localhost:3333/burger', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('app-token')
        }
        }).then((response) => {
            const { data } = response;
            console.log(data)
            if (data) {
                burgers = data.results
            }
        }).catch((error) => {
            console.log(error)
        })
}

loadBurgers();

const CustomerBurgers = () => {
    const classes = useStyles()
    return (
        <>
        <Menu />
        <h1>Lista de Burgers</h1>
        <Grid
            container
            alignItems="center">
            <Grid item className={classes.accordion}>
                {burgers && burgers.map((burger: any) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>{burger.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="Lista">
                                <List>
                                    {burger.pieces.map((piece:any) => (
                                        <ListItem>
                                            <ListItemText primary={piece.ingredient.name + ': R$' + piece.ingredient.value} />
                                        </ListItem>
                                    ))}
                                    <ListItem>
                                        <ListItemText className={classes.total} primary={'Total: R$ '+ burger.pieces.reduce((acc, piece:any) => acc + Number(piece.ingredient.value),0)} />
                                    </ListItem>
                                </List>
                            </div>
                        </AccordionDetails>
                    </Accordion>
               ))}
                
            </Grid>
        </Grid>
        </>
    )
}

export default CustomerBurgers