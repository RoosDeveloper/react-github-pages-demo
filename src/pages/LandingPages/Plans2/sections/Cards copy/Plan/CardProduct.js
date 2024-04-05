import DoneIcon from '@mui/icons-material/Done';
import React from 'react'
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

function CardProduct({ product }) {
    return (

        <Grid container direction="row" xs='auto' alignItems="center" maxWidth="80vw">
            <Grid item xs={12} display={'flex'} marginLeft={3}>
                <DoneIcon />
                <Typography variant='h10'>{product}</Typography>
            </Grid>

        </Grid>

    )
}

export default CardProduct