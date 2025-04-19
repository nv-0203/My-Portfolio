import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface Result {
  type: string;
  value: string;
}

interface EducationEntry {
  title: string;
  institution: string;
  duration: string;
  result: Result[];
  description?: string;
  skills?: string[];
  logo: string;
}

const education: EducationEntry[] = [
  {
    title: 'B. Tech in Computer Engineering',
    institution: 'Delhi Technological University',
    duration: '2021 - 2025',
    result: [{ type: 'CGPA', value: '8.75' }],
    skills: ['Data Structures', 'Algorithms', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'Machine Learning', 'Deep Learning'],
    logo: 'https://res.cloudinary.com/deyb9xk4z/image/upload/v1743936806/dtu-removebg-preview_msfbpz.png'
  },
  {
    title: '',
    institution: 'Delhi Public School, Jeddah',
    duration: '2021',
    result: [
      { type: 'Class XII', value: '97.6%' },
      { type: 'Class X  ', value: '93.2%' }
    ],
    skills: ['Physics', 'Chemistry', 'Mathematics', 'English'],
    logo: 'https://res.cloudinary.com/deyb9xk4z/image/upload/v1744971732/dps_logo_o0gfwu.jpg'
  }
];

const Education = () => {
  return (
    <Box id="education" component="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
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
            Education
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
            My academic journey and achievements.
          </Typography>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {education.map((edu, index) => (
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
                    backgroundColor: 'rgba(0, 150, 136, 0.05)',
                    borderLeft: '4px solid rgba(0, 150, 136, 0.5)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 150, 136, 0.08)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        backgroundColor: 'white',
                        borderRadius: 1,
                        p: 0.5
                      }}
                    >
                      <Box
                        component="img"
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        sx={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5" component="h2" sx={{ color: '#fff' }}>
                        {edu.institution}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {edu.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {edu.duration}
                      </Typography>
                    </Box>
                  </Box>
                  {edu.description && (
                    <Typography paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {edu.description}
                    </Typography>
                  )}
                  <Box sx={{ mb: 2 }}>
                    {edu.result.map((result, i) => (
                      <Typography 
                        key={i}
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          mb: i < edu.result.length - 1 ? 1 : 0
                        }}
                      >
                        {result.type}: {result.value}
                      </Typography>
                    ))}
                  </Box>
                  {edu.skills && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {edu.skills.map((skill, i) => (
                        <Typography
                          key={i}
                          component="span"
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor: 'rgba(0, 150, 136, 0.1)',
                            color: '#fff',
                            borderRadius: 1,
                            fontSize: '0.75rem',
                            display: 'inline-block',
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 