import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './menu.css'

const useStyles = makeStyles({
    bar: {
        backgroundColor: '#ffac2f'
    },
    root: {
        flexGrow: 1,
        width: '100%'
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
});

const Menu = (props) => {
    const classes = useStyles();
    const isAuth = localStorage.getItem('app-token')
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="menu-link" to="/">Your Burguer</Link>
                    </Typography>
                    {isAuth && <Button color="inherit"><Link className="menu-link" to="/ingredients">Ingredientes</Link></Button>}
                    {isAuth && <Button color="inherit"><Link className="menu-link" to="/burgers">Meus burguers</Link></Button>}
                    {!isAuth && <Button color="inherit"><Link className="menu-link" to="/login">Login</Link></Button>}
                    {isAuth && <Button color="default"><Link className="menu-link" to="/login" onClick={()=> localStorage.clear()} >Sair</Link></Button>}
                    {!isAuth && <Button color="inherit"><Link className="menu-link" to="/register">Registrar</Link></Button>}
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Menu