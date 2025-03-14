import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinkedIn, Email, Instagram, Facebook } from '@mui/icons-material';
import LogoByteCodeWhite from '../../../assets/images/byteCode_Logo_white.svg';
import MyIcon from '../../../assets/images/icon_arrow-up-right.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', backgroundColor: '#010101', p: { xs: 5, md: 15 } }}>
      <Box
        sx={{
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DDF247',
          padding: { xs: '20px', md: '30px' },
          borderRadius: '30px',
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: '1200px' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" fontFamily="Aeonik">
              {t('footer.footer_title')}
            </Typography>
            <Typography variant="h5" marginTop="20px" fontFamily="Aeonik">
              {t('footer.footer_description')}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t('footer.name')}
                  fontFamily="Aeonik"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t('footer.email')}
                  fontFamily="Aeonik"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t('footer.message')}
                  multiline
                  rows={4}
                  fontFamily="Aeonik"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  href="#cta"
                  sx={{
                    backgroundColor: '#010101',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {t('footer.button')}
                  <img
                    src={MyIcon}
                    alt="Ícono de enviar mensaje"
                    style={{ marginLeft: '10px' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: 'black',
          color: 'white',
          py: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <img src={LogoByteCodeWhite} alt="byteCode Logo" />
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
              }}
            >
              <LinkedIn sx={{ color: 'white', mr: 3 }} />
              <Email sx={{ color: 'white', mr: 3 }} />
              <Instagram sx={{ color: 'white', mr: 3 }} />
              <Facebook sx={{ color: 'white' }} />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginTop: '20px',
            borderTop: '1px solid white',
            paddingTop: '10px',
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography
            variant="h6"
            fontFamily="Aeonik"
          >
            © 2024 Copyright. |{' '}
            <a href="https://bytecode.com" style={{ color: '#DDF247' }}>
              bytecode.com
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;