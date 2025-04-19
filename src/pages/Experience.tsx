import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Ciena',
    duration: 'Jan 2025 - Present',
    description: 'Contributing to PlannerPlus, a network planning and optimization platform. Developing high-performance UI components, implementing responsive designs, and collaborating with cross-functional teams in an agile set-up to enhance user experience.',
    skills: ['React', 'TypeScript', 'Redux', 'Saga', 'REST APIs'],
    logo: 'https://res.cloudinary.com/deyb9xk4z/image/upload/v1744972826/ciena_logo_kdtrmm.png'
  },
  {
    title: 'Research Intern',
    company: 'Machine Learning Research Lab, DTU',
    duration: 'Jun 2024 - Aug 2024',
    description: 'Worked on the project "Dynamic Topology Temporal Shift Network for Skeleton-Based Action Recognition" under the guidance of Prof. (Dr.) Anil SIngh Parihar.',
    skills: ['Python', 'PyTorch', 'CUDA'],
  },
];

const Experience = () => {
  return (
    <Box id="experience" component="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
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
            sx={{ textAlign: 'center', color: '#ffffff' }}
          >
            Work Experience
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              color: '#ffffff'
            }}
          >
            My professional journey and contributions.
          </Typography>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    mb: 4,
                    position: 'relative',
                    borderRadius: 2,
                    backgroundColor: 'rgba(25, 118, 210, 0.05)',
                    borderLeft: '4px solid rgba(25, 118, 210, 0.5)',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    {exp.logo ? 
                    <Box
                      component="img"
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      sx={{
                        width: 55,
                        height: 55, 
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        paddingRight: 1
                      }}
                    /> 
                    : 
                    <WorkIcon sx={{ 
                      mr: 2, 
                      color: 'rgba(25, 118, 210, 0.8)',
                      fontSize: '2rem'
                    }} />}
                    <Box>
                      <Typography variant="h5" component="h2" sx={{ color: '#ffffff', fontWeight: 500 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#ffffff', opacity: 0.9 }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ffffff', opacity: 0.8 }}>
                        {exp.duration}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography paragraph sx={{ color: '#ffffff', opacity: 0.9 }}>
                    {exp.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.skills.map((skill, i) => (
                      <Typography
                        key={i}
                        component="span"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          bgcolor: 'rgba(25, 118, 210, 0.1)',
                          color: '#ffffff',
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          display: 'inline-block',
                          opacity: 0.95
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 