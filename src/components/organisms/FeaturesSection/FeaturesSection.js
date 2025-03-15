import React, { useState } from 'react';
import Grid2 from '@mui/material/Grid2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mobileAppIcon from '../../../assets/images/mobile_app_icon.svg';
import devAppIcon from '../../../assets/images/web_dev_icon.svg';
import qaConsultingIcon from '../../../assets/images/qaConsultingIcon.svg';
import { useMediaQuery } from '@mui/material';

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0); 
  const isMobileScreen = useMediaQuery('(max-width:600px)');

    const slides = [
    {
      icon: mobileAppIcon,
      title: t('featuresSection.mobile_app_title'),
      description: t('featuresSection.mobile_app_description'),
      backgroundColor: '#FFFFFF'
    },
    {
      icon: devAppIcon,
      title: t('featuresSection.web_dev_title'),
      description: t('featuresSection.web_dev_description'),
      backgroundColor: '#DDF247'
    },
    {
      icon: qaConsultingIcon,
      title: t('featuresSection.qa_title'),
      description: t('featuresSection.qa_description'),
      backgroundColor: '#FFFFFF'
    },
  ];

  return (
    <Grid2 container spacing={2} sx={{ padding: '50px 0px 50px' }}>
      <Grid2 size={{ xs: 12, md: 4 }} sx={{ padding: '0px 60px 30px' }}>
        <Typography
          variant="h3"
          fontFamily="Aeonik"
          fontWeight="bold"
          color="#010101"
        >
          {t('featuresSection.features_title')}
        </Typography>
        <Typography variant="body1" fontFamily="Aeonik" color="#010101" mt={2}>
          {t('featuresSection.features_description')}
        </Typography>
        <Box mt={4} sx={{ display: 'flex', justifyContent: 'left', gap: '10px' }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: '50px', 
                height: '12px', 
                borderRadius: '5px', 
                backgroundColor: activeIndex === index ? '#E7F22F' : '#D3D3D3', // Color activo/inactivo
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Grid2>

      {/* Carrusel */}
      <Grid2 size={{ xs: 12, md: 8 }}>
        <Swiper
          spaceBetween={30}
          slidesPerView={isMobileScreen ? 1.15 : 2.2}      
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Actualizamos el índice activo
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
             <Card
                sx={{
                  minHeight: '250px',
                  padding: '50px 50px',
                  backgroundColor: slide.backgroundColor,
                  borderRadius: '20px',
                  boxShadow: 'none',
                }}
              >
                <span className="icon">
                  <img src={slide.icon} alt={`${slide.title} Icon`} />
                </span>{' '}
                <Typography variant="h4" fontFamily="Aeonik" fontWeight="bold">
                  {slide.title}
                </Typography>
                <Typography variant="body1" fontFamily="Aeonik" mt={1}>
                  {slide.description}
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid2>
    </Grid2>
  );
};

export default FeaturesSection;



