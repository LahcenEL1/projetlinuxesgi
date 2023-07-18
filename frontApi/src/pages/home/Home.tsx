import { Box, Divider, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link, Button, Grid, InputLabel, Input, FormControl, IconButton, InputAdornment, LinearProgress, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Container } from "@mui/system";

import config from '../../style/config';
function Home() {
  let navigate = useNavigate();

  return (
    <Box sx={{
      pt: 5,
      minHeight: '80vh',
      backgroundColor: config.mainColor,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Container sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <Box
          sx={{
            backgroundColor: 'white',
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            width: '100%',
            padding: '1em',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: 'space-between',
              alignItems: "center",
              width: '100%',
              padding: '2em'
            }}
          >


            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: "start",
                width: { xs: "100%", md: "49%" },
                minWidth: '50%',
              }}
            >
              <Typography component='h3' variant='h4' color='primary'>Welcome to the dialog world</Typography><br />
              <Typography component='p' variant='h6'   >Notre site web est un lieu d'échange et de rencontre pour les personnes qui souhaitent partager leurs idées, leurs passions et leurs expériences. Nous avons créé cette plateforme pour permettre aux gens de se connecter et de se découvrir de nouveaux horizons.</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: 'space-between',
                  alignItems: "center",
                  width: '100%',
                  marginTop: '1em'
                }}
              >

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ width: "100%" }}
                    onClick={() => navigate(`/login`)}
                  >Login
                  </Button>

              </Box>
            </Box>
            <Box sx={{}}>
              <img style={{ display: 'flex', width: '100%', maxWidth: '40em', height: '100%', objectFit: 'contain' }} src="https://i.pinimg.com/originals/95/3b/24/953b24b6385bb183e2cb61e188bca124.png" alt="" />
            </Box>
          </Box>
        </Box >
      </Container>
    </Box>
  )
}

export default Home;