import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Divider, Box, IconButton } from '@mui/material';
import CardProduct from './CardProduct';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const CardPlan = ({ title, price, combos, discount }) => {
    return ( <
        Card sx = {
            { maxWidth: 500, width: 350, borderRadius: '10px', overflow: 'hidden', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } } } >
        <
        CardContent >
        <
        Box sx = {
            { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' } } >
        <
        Typography variant = "h5"
        color = "primary"
        sx = {
            { fontWeight: 'bold', textAlign: 'center' } } > { title } <
        /Typography> <
        /Box> <
        Typography variant = "h4"
        color = "primary"
        sx = {
            { fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' } } >
        $ { price } <
        /Typography> <
        Divider sx = {
            { marginY: '16px' } }
        /> <
        Typography variant = "body2"
        color = "text.secondary"
        sx = {
            { marginBottom: '16px' } } >
        <
        ul style = {
            { listStyle: 'none', paddingInlineStart: 0, textAlign: 'center' } } > {
            combos.map((combo, index) => {
                return ( <
                    >
                    <
                    Accordion >
                    <
                    AccordionSummary expandIcon = { < ExpandMoreIcon / > }
                    aria - controls = "panel1-content"
                    id = "panel1-header" >
                    { combo.comboName } <
                    /AccordionSummary> <
                    AccordionDetails > {
                        combo.products.map((product, index) => {
                            return ( <
                                >
                                <
                                CardProduct product = { product.productName }
                                index = { index } > < /CardProduct> <
                                />

                            )
                        })
                    } <
                    /AccordionDetails> <
                    /Accordion>

                    <
                    />
                )
            })
        } <
        /ul> <
        /Typography> {
            discount && ( <
                Typography variant = "body2"
                color = "text.secondary"
                fontWeight = { 'bold' }
                sx = {
                    { marginBottom: '16px', textAlign: 'center' } } > { discount } <
                /Typography>
            )
        } <
        Box sx = {
            { display: 'flex', justifyContent: 'center' } } >
        <
        Button variant = "contained"
        color = "primary"
        sx = {
            { borderRadius: '30px', padding: '12px 32px', textTransform: 'none', fontWeight: 'bold' } } >
        Suscribirse <
        /Button> <
        /Box> <
        /CardContent> <
        /Card>



    );
};

export default CardPlan;