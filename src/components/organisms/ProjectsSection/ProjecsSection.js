import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import projectImage1 from '../../../assets/images/reco.png';
import projectImage2 from '../../../assets/images/cometas.png';
import projectImage3 from '../../../assets/images/swagger-ui-docs.png';
import { useTranslation } from 'react-i18next';

const OurProjectsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      title: 'Reco | Profesionales de confianza',
      tags: ['Web App', 'React'],
      image: projectImage1,
      link: 'https://recolatam.com/',
    },
    {
      title: 'Cometas Club',
      tags: ['Website', 'Infantil'],
      image: projectImage2,
      link: 'https://cometasclub.com/',
      description: 'Donde los niños exploran, crean y crecen. Aprende a través de la diversión en un ambiente seguro y amigable.',
    },
    {
      title: 'Reco REST API',
      tags: ['REST API', 'Postman Docs'],
      image: projectImage3,
      link: 'https://dev.recolatam.com/api-docs/',
      description: 'API development and documentation using Postman.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = isMobile ? 1 : 3;

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + visibleSlides >= projects.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? projects.length - visibleSlides : prevIndex - 1
    );
  };

  return (
    <Box sx={{ backgroundColor: 'white', padding: { xs: '50px 20px', md: '150px 50px' } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography
            variant="h3"
            fontFamily="Aeonik"
            fontWeight="bold"
            color="#010101"
            gutterBottom
          >
            {t('ourProjects.ourProjects_title')}
          </Typography>
          <Typography variant="body1" fontFamily="Aeonik" color="#555555">
            {t('ourProjects.ourProjects_description')}
          </Typography>
        </Grid>

        {/* Project Carousel */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={1} textAlign="center">
            <IconButton onClick={handlePrev}>
              <ArrowBackIos />
            </IconButton>
          </Grid>

          <Grid item xs={10}>
            <Grid container spacing={2} justifyContent="center">
              {projects
                .slice(currentIndex, currentIndex + visibleSlides)
                .map((project, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Link href={project.link} target="_blank" underline="none">
                      <Card
                        sx={{
                          maxWidth: 345,
                          height: 'auto',
                          transition: 'all 0.3s ease',
                          boxShadow:
                            index === 1
                              ? '0px 8px 16px rgba(0, 0, 0, 0.2)'
                              : 'none',
                          borderRadius: '16px',
                        }}
                      >
                        <CardContent>
                          <Typography
                            variant="h5"
                            fontFamily="Aeonik"
                            fontWeight="bold"
                            textAlign="center"
                          >
                            {project.title}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: '10px',
                              justifyContent: 'center',
                              marginTop: '10px',
                            }}
                          >
                            {project.tags.map((tag, idx) => (
                              <Chip
                                key={idx}
                                label={tag}
                                sx={{
                                  backgroundColor:
                                    tag === 'React' || tag === 'Web App'
                                      ? '#DDF247'
                                      : '#000000',
                                  color: tag === 'React' || tag === 'Web App' ? '#000' : '#fff',
                                }}
                              />
                            ))}
                          </Box>
                          {project.description && (
                            <Typography
                              variant="body2"
                              fontFamily="Aeonik"
                              textAlign="center"
                              marginTop="10px"
                            >
                              {project.description}
                            </Typography>
                          )}
                        </CardContent>
                        <CardMedia
                          component="img"
                          height="200"
                          image={project.image}
                          alt={`Image of ${project.title}`}
                        />
                      </Card>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Grid>

          <Grid item xs={1} textAlign="center">
            <IconButton onClick={handleNext}>
              <ArrowForwardIos />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurProjectsSection;