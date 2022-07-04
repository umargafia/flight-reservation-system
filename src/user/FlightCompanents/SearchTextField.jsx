import { makeStyles, TextField } from '@material-ui/core'
import { Button } from '@mui/material';
import React from 'react'


const useStyles = makeStyles({
        input: {
                marginLeft: "6%",
                width: "400px",
               marginBottom:"20px"
        }
});
const SearchTextField = (props) => {
        const classes = useStyles();
        return (
                
                <span>
                        <TextField
                                type={props.type}
                                margin="dense"
                                label={props.text}
                                variant="outlined"
                                className={classes.input}

                        />
                        
               </span>

        )
}

export default SearchTextField