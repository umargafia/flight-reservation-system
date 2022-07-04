import { makeStyles } from '@material-ui/core';


import React from 'react'
const useStyles = makeStyles({
        
        

});

function ViewMoreButton({text}) {
        const classes = useStyles();
        return (
                <button className='joinus-button' >
                        <span> {text}</span>
                </button>
        )
}

function ViewMoreArrows(){
        return(
                <button className='arrow'>

                                                <span  >&#187;</span>
                               </button>
        )
}

export default ViewMoreButton
export {ViewMoreArrows}