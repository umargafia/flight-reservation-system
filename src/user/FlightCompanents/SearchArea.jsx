import { Button, Container, makeStyles } from '@material-ui/core';
import { Card, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import SearchTextField from './SearchTextField';


const useStyles = makeStyles({
        paper: {
                width: "95%",
                marginLeft: "20px",
                padding: "10px",
                marginTop: "100px"
        },
        textFieldContainer: {
              
        }

});

const searchText = {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
}

const SearchArea = () => {
        const classes = useStyles();
        return (
                <Paper className={classes.paper} elevation={6}>
                        <Typography variant='h4' className={classes.searchText} style={searchText}>Search</Typography>
                        <SearchTextField text="From " />
                        <SearchTextField text="To " />
                        <SearchTextField type="date" varient="standard" />
                        <Button variant="contained" fullWidth color='primary' >Search</Button>
                </Paper>
                
        )
}

export default SearchArea