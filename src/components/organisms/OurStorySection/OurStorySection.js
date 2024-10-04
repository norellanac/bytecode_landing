import React from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';
import OurStoryImage from '../../../assets/images/byteCode_ourStory.png';
import missionIcon from '../../../assets/images/missionIcon.svg';
import visionIcon from '../../../assets/images/visionIcon.svg';

const OurStorySection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '50px 0', // Espaciado alrededor de la sección
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={12} md={8} sx={{ padding: '30px 70px' }}>
          <Typography
            variant="h3"
            fontFamily="Aeonik"
            fontWeight="bold"
            color="#010101"
            gutterBottom
          >
            {t('ourStory.ourStory_title')}
          </Typography>
          <Typography variant="body1" fontFamily="Aeonik" gutterBottom>
            {t('ourStory.ourStory_description')}
          </Typography>

          <Grid container spacing={4}>
            {/* Mission */}
            <Grid
              xs={12}
              md={6}
              sx={{
                padding: '30px 30px',
              }}
            >
              <Box mt={4}>
                <img src={missionIcon} alt="Icono" style={{ width: '50px' }} />
              </Box>
              <Typography
                variant="h4"
                fontFamily="Aeonik"
                gutterBottom
                fontWeight="bold"
              >
                {t('ourStory.mission_title')}
              </Typography>
              <Typography variant="body1" fontFamily="Aeonik">
                {t('ourStory.mission_description')}
              </Typography>
            </Grid>

            {/* Vision */}
            <Grid xs={12} md={6} sx={{ padding: '30px 30px' }}>
              <Box mt={4}>
                <img src={visionIcon} alt="Icono" style={{ width: '50px' }} />
              </Box>
              <Typography
                variant="h4"
                fontFamily="Aeonik"
                gutterBottom
                fontWeight="bold"
              >
                {t('ourStory.vision_title')}
              </Typography>
              <Typography variant="body1" fontFamily="Aeonik">
                {t('ourStory.vision_description')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Imagen */}
        <Grid
          xs={12}
          md={4}
          sx={{
            padding: '0px 50px 0px 50px',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={OurStoryImage}
            alt="Our Story Image"
            sx={{ maxWidth: '100%' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurStorySection;
