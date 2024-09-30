import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import CodeSectionPhoto from '../../../assets/images/CodeSection.png';
import MyIcon from '../../../assets/images/icon_arrow-up-right.svg';

const NewSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'white', // Fondo blanco para toda la sección
        padding: '20px 0', // Espaciado alrededor de la sección
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ padding: '10px 20px', alignItems: 'center' }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={CodeSectionPhoto}
            alt="Texto en un editor de código"
            sx={{ width: '100%' }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ padding: '0px 50px 0px 50px' }}>
          <Typography
            variant="h4"
            fontFamily="Aeonik"
            fontWeight="bold"
            color="#010101"
          >
            {t('codeSection.code_title')}
          </Typography>
          <Typography
            variant="body1"
            fontFamily="Aeonik"
            color="#010101"
            mt={2}
            mb={4}
          >
            {t('codeSection.code_description')}
          </Typography>
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
            {t('heroSection.hero_cta')}
            <img src={MyIcon} alt="Mi Icono" style={{ marginLeft: '10px' }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewSection;
