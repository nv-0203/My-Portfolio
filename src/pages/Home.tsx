import { Box, Typography, Button, Container, Grid, Paper, Avatar, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'C++', level: 75 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 70 },
];

const Home = () => {
  return (
    <Box id="home" component="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: 12 }}>
      <Container>
        <Box
          sx={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar
              src="/profile_pic.jpeg"
              alt="Nufail Vhora"
              sx={{
                width: 200,
                height: 200,
                mb: 4,
                border: '4px solid',
                borderColor: 'primary.main',
                boxShadow: 3,
                mx: 'auto',
                display: 'block'
              }}
            />
            <Typography variant="h2" component="h1" gutterBottom>
              Hey there! I'm Nufail Vhora
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
            a software engineer who loves building cool things with code. Here, you can check out what I'm working on.
            I'm always open to discussing new projects, creative ideas, or opportunities.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
              <IconButton
                href="https://www.linkedin.com/in/nufail-vhora/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#0077B5',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 119, 181, 0.1)',
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                href="https://github.com/nv-0203"
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
              <IconButton
                    color="primary"
                    href="mailto:nufailvhora03@gmail.com"
                    size="large"
                  >
                    <EmailIcon fontSize="large" />
                  </IconButton>
            </Box>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h4" sx={{ mt: 8, mb: 4 }}>
              Skills
            </Typography>
            <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
              <Grid container spacing={3}>
                {skills.map((skill) => (
                  <Grid item xs={12} sm={6} key={skill.name}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {skill.name}
                      </Typography>
                      <Box
                        sx={{
                          width: '100%',
                          height: 10,
                          backgroundColor: 'grey.200',
                          borderRadius: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            width: `${skill.level}%`,
                            height: '100%',
                            backgroundColor: 'primary.main',
                            transition: 'width 1s ease-in-out',
                          }}
                        />
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 