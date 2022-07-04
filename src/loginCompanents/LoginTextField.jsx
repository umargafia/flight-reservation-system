import { makeStyles } from '@material-ui/core';
import { TextField } from '@mui/material';
import React from 'react'

const useStyles = makeStyles({
        input: {
                marginTop: "20px"
        }
});

function LoginTextField(props) {
        const classes = useStyles();
        return (
                <TextField
                        type={props.typ}
                        margin="dense"
                        label={props.text}
                        variant="outlined"
                        className={classes.input}
                        fullWidth
                        
                />
        )
}

export default LoginTextField;