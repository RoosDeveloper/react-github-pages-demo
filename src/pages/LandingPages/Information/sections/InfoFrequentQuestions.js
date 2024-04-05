import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

// Zeus LiveStream React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Zeus LiveStream React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function InfoFrequentQuestions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h2" pb={5}>
            Preguntas frecuentes
          </MKTypography>{" "}
        </Grid>{" "}

          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": { display: expanded ? "block" : "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <MKTypography variant="h5" color="dark">
                ¿Qué es IPTV?
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Televisón por IP, una manera de transmitir televisión a través de Internet con un
                método diferente al que utilizan plataformas de streaming convencionales como
                Netflix, Amazon Prime Video o HBO entre otras.
              </MKTypography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <MKTypography variant="h5" color="dark">
                ¿Cuántos dispositivos?
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Nuestra APP puede conectarse en tres dispositivos a la vez.
              </MKTypography>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                En los dispositivos siguientes: 1. iPhone o Android 2. Computadora 3. En la
                comodidad de tu TV
              </MKTypography>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Pida que le den a probar en los diferentes dispositivos. Disfrute de la experiencia
                completa.
              </MKTypography>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Llévate tu programa al trabajo o simplemente llévate tu Firestick a la villa en las
                vacaciones y disfruta del mejor catálogo del mercado con el mejor ancho de banda
                actualmente.
              </MKTypography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <MKTypography variant="h5" color="dark">
                ¿Cuál es la velocidad de internet recomendada?
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Se recomienda 20MB de velocidad aceptable. 1. El usuario deberá tener un Internet
                5-10MB recomendado para películas y series. 2. 15-20MB mínimo recomendado para la TV
                en vivo. Preferiblemente fibra óptica de claro.
              </MKTypography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <MKTypography variant="h5" color="dark">
                ¿Como Instalar en Firestick 4k?
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Utilizando tu firestick siga los siguientes pasos: Pasó 1 1. (App de origen
                desconocido) Diríjase a la parte derecha del menú inicial, selecciona el símbolo de
                "Tuerca". 2. Dentro de las opciones seleccione "Mi Fire TV" 3. Opciones para
                desarrollador 3.1(En caso de no aparecer la opción del punto 3) -Selecciona "ACERCA
                DE". De no ser así continue con el punto 4 y siguientes. 3.2 seleccione varias veces
                "Fire TV Stick" hasta que salga el mensaje de que " Ya eres administrador". 3.3
                vuelva una vez hacia atrás y vuelva al punto 3 y 4. 4.Activar Apps de origen
                desconocido. Pasó 2 1.(Downloader) En la parte izquierda del menú inicial,
                selecciona el símbolo de "lupa" 2. Selecciona búsqueda y escribe "downloader". 3.
                selecciona la app color naranja e inserte el siguiente link de descarga 4.donde dice
                "Enter a URL or..." Escribirá el siguiente link. Pasó 3 1.(link de descarga) inserte
                el siguiente link: bit.ly/axetv321 2.luego se la descarga seleccione instalar. 3.
                Abrir Pasó 4 1.pida su usuario y contraseña de prueba de 24h y/o premium.
              </MKTypography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <MKTypography variant="h5" color="dark">
                ¿Como Instalar en Android y iOS?
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails>
              <MKTypography variant="body2" color="dark" opacity={0.8}>
                Smarters player Lite es una aplición para que puedas ver el contenido de AXE en tu
                celular, iPad y computadora. Pasos para descargar Smaters player 1- Descargar la app
                pc o mac: www.iptvsmarters.com App store o Google play: iptv-smarters player 2-
                Entrar a Add Your playlist si es en iPhone y en android darle a Iniciar sección con
                xtream. ​ 3- Poner tus datos Nombre: tu nombre Usuario: Tu Usario de axe 👀 Si tu
                usuario tiene una letra mayúscula debe de ponerlo en mayúscula. Contraseña: tu
                contraseña de axe URL: http://mundofuturo.co
              </MKTypography>
            </AccordionDetails>
          </Accordion>

      </Container>
    </MKBox>
  );
}

export default InfoFrequentQuestions;
