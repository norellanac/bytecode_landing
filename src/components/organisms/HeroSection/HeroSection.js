import React from 'react';
import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import heroImage from '../../../assets/images/heroImage.png';
import LogoByteCode from '../../../assets/images/byteCode_Logo.svg';
import CodeCircle from '../../../assets/images/CodeCircle.svg';
import Icon from '../../../assets/images/icon.svg';
import MyIcon from '../../../assets/images/icon_arrow-up-right.svg';
import LanguageSwitcher from '../../molecules/LanguageSwitcher';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Grid container sx={{ padding: 0 }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none', py: 2 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            src={LogoByteCode}
            alt="byteCode Logo"
            sx={{ height: 40 }}
          />
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>

      <Grid container sx={{ marginTop: 8 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ py: 5 }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'medium', mb: 2}}>
            {t('heroSection.hero_title_1')}
            <span className="icon">
              <img src={CodeCircle} alt="Code Circle"  />
            </span>
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'medium', mb: 2, mx: 6 }}
          >
            {t('heroSection.hero_title_2')}
          </Typography>

          <Grid item xs={12} container justifyContent="space-between">
            <img src={Icon} alt="byteCode icon" />
          </Grid>

          <Typography variant="h6" sx={{ mb: 4, mx: 6 }}>
            {t('heroSection.hero_subtitle')}
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

        {/* Image */}
        <Grid
          item
          xs={12}
          md={6}
          className="hero-image"
          sx={{
            backgroundColor: '#010101',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '0px',
          }}
        >
          <img
            src={heroImage}
            alt="Hero"
            style={{ width: '100%', maxHeight: 600, height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
