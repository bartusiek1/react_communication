import React from 'react';
import classes from "./Tabela.modules.css";
import {Grid} from "@mui/material";

const Tabela = () => {
    return (
        <div className={classes.Tabela}>
            <Grid container className={classes.NaglowekTabeli}>
                <Grid item xs={1}>Id.</Grid>
                <Grid item xs={2}>Coś</Grid>
                <Grid item xs={2}>Coś2</Grid>
                <Grid item xs={1}>Coś3</Grid>
                <Grid item xs={2}>Usuń</Grid>
                <Grid item xs={2}>Pokaż</Grid>
                <Grid item xs={2}>Edycja</Grid>
            </Grid>
        </div>
    );
}

export default Tabela;