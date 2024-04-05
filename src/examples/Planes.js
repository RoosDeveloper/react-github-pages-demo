import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CardPlan from '../Components/Cards/CardPlan';
import VideoEjemplo from '../Components/Video/VideoEjemplo';


const planes = [
  {
    pricePlansId: 1,
    planName: "Plan Básico",
    planDescription: "Valido por 2 meses",
    durationPlan: 60,
    price: 0.00,
    combos: [
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 2,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      },
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película C",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      }

    ]
  },{
    pricePlansId: 1,
    planName: "Plan Básico",
    planDescription: "Valido por 2 meses",
    durationPlan: 60,
    price: 0.00,
    combos: [
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 2,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      },
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película C",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      }

    ]
  },{
    pricePlansId: 1,
    planName: "Plan Básico",
    planDescription: "Valido por 2 meses",
    durationPlan: 60,
    price: 0.00,
    combos: [
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 2,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      },
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película C",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      }

    ]
  },
  {
    pricePlansId: 1,
    planName: "Plan Básico",
    planDescription: "Valido por 2 meses",
    durationPlan: 60,
    price: 0.00,
    combos: [
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 2,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      },
      {
        comboId: 1,
        comboName: "Combo Gold",
        comboDescription: "Combo con serie y plan Premium",
        comboPrice: 6800.00,
        products: [
          {
            productId: 1,
            productName: "Película A",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película B",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          },
          {
            productId: 1,
            productName: "Película C",
            productDescription: null,
            productImagePath: null,
            price: 10.00,
            stock: 0,
            category: "Peliculas"
          }
        ],
      }

    ]
  }
]

function Planes() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'black',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh', // Altura de la sección de la imagen de fondo
          marginTop: 5
        }}
      >
        {/* Sección de contenido */}
        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid item xs={12}>
            <Typography variant='h3' mt={5} color={'primary.white'}> Disfruta en tu TV</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' fontWeight="bold" color={'primary.white'}> Para poder contratar por favor escribenos y contacta con nosotros desde cualquier parte del mundo!</Typography>
            <Typography variant='h6' fontWeight="bold" color={'primary.white'}> Los siguientes planes son informativos</Typography>
          </Grid>
          <VideoEjemplo />
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: 'gray',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'auto', // Altura de la sección de la imagen de fondo
        }}
      >
        <Grid container justifyContent={'center'}>
          <Grid container padding={3} justifyContent={'center'} textAlign={'center'}>
            <Typography>
              <Typography variant='h4' color={'primary.white'}> Disfruta de nuestros 4 planes de pago</Typography>
            </Typography>
          </Grid>
          <Grid container padding={3} spacing={3} justifyContent="center" mt={2}>

            <Grid container display={'flex'} justifyContent={'center'} spacing={10} mb={2}>
              {
                planes.map(plan => {
                  return (
                    <Grid item>
                      <CardPlan title={plan.planName} price={plan.price} combos={plan.combos} discount={'20% descuento en primera compra'} />
                    </Grid>
                  )
                })
              }
            </Grid>


          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default Planes;
