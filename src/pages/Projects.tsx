import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Gesture Quiz',
    description: 'an interactive web application that allows users to participate in quizzes using hand gestures for input',
    image: 'https://res.cloudinary.com/deyb9xk4z/image/upload/v1743919502/cover_img_egbftl.png',
    technologies: ['ReactJS', 'TensorFlow.js', 'MaterialUI'],
    github: 'https://github.com/nv-0203/GestureQuiz',
    demo: 'https://gesturequiz.netlify.app/',
    fitImage: true
  },
  {
    title: 'BlogNest',
    description: 'a full-stack blogging platform enabling user registration, authentication, post and profile management',
    image: 'https://res.cloudinary.com/deyb9xk4z/image/upload/v1743921311/cover_image_zumdew.png',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/nv-0203/BlogNest',
    demo: 'https://blognest-lo62.onrender.com/',
    fitImage: true
  },
  {
    title: 'MedWise',
    description: 'an application where you can check if you have a disease or not',
    image: 'https://res.cloudinary.com/deyb9xk4z/image/upload/v1743923275/cover_image_p7s5il.png',
    technologies: ['scikit-learn', 'pycaret', 'Streamlit'],
    github: 'https://github.com/nv-0203/MedWise',
    demo: 'https://medwise-nv-0203.streamlit.app/',
    fitImage: true
  },
  {
    title: '15 Puzzle',
    description: 'a game where the user can solve the 15 puzzle by sliding the tiles',
    image: 'https://res.cloudinary.com/deyb9xk4z/image/upload/v1743920830/logo_rczzx4.png',
    technologies: ['ReactJS', 'Tailwind-CSS'],
    github: 'https://github.com/nv-0203/15-Puzzle',
    demo: 'https://15-puzzle-nv-0203.netlify.app/',
    fitImage: false
  },
];

const Projects = () => {
  return (
    <Box id="projects" component="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ textAlign: 'center', color: '#fff' }}
          >
            My Projects
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              color: '#fff'
            }}
          >
            Here are some of the projects I've worked on. Each project represents
            a unique challenge and learning opportunity.
          </Typography>
          

          <Grid 
              container 
              spacing={4}
              sx={{ 
                maxWidth: '1200px', 
                marginLeft: { 
                  xs: 0,     // No margin on extra-small screens (phones)
                  sm: 25     // Apply margin from small screens and up
                }
              }}
            >
              {projects.map((project, index) => (
                <Grid item key={index} sx={{ width: { xs: '100%', sm: '50%', md: '40%' } }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          // width: 300,
                          // height: 300, 
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: project.fitImage ? 'cover' : 'contain',
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech, i) => (
                          <Typography
                            key={i}
                            component="span"
                            sx={{
                              mr: 1,
                              px: 1,
                              py: 0.5,
                              bgcolor: 'primary.main',
                              color: 'white',
                              borderRadius: 1,
                              fontSize: '0.75rem',
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#333',
                            '&:hover': {
                              backgroundColor: 'rgba(51, 51, 51, 0.1)',
                            },
                          }}
                        >
                          <GitHubIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                        <Button
                          variant="outlined"
                          size="small"
                          href={project.demo}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 