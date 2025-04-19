import { Box, Typography, Container, Paper, Link, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const profiles = [
  {
    platform: 'LeetCode',
    username: 'NufailVhora',
    link: 'https://leetcode.com/u/NufailVhora/',
    stats: [
      { label: 'Problems Solved', value: '335' },
      { label: 'Contest Rating', value: '1799' },
    ],
    color: '#FFA116',
    icon: '/assets/leetcode.png',
  },
  {
    platform: 'CodeForces',
    username: 'nufail.vhora',
    link: 'https://codeforces.com/profile/nufail.vhora',
    stats: [
      { label: 'Title', value: 'Specialist' },
      { label: 'Max Rating', value: '1547' },
      { label: 'Problems Solved', value: '464' },
    ],
    color: '#008080',
    icon: '/assets/codeforces.jpeg',
  },
  {
    platform: 'CodeChef',
    username: 'nufailvhora03',
    link: 'https://www.codechef.com/users/nufailvhora03',
    stats: [
      { label: 'Max Rating', value: '1760' },
    ],
    color: '#733C0C',
    icon: '/assets/codechef.jpeg',
  },
];

const CodingProfiles = () => {
  return (
    <Box id="coding-profiles" component="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container>
        <Box sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ textAlign: 'center' }}
            >
              Coding Profiles
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                mb: 6, 
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Check out my competitive programming journey across various platforms.
            </Typography>

            <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
              <Grid container spacing={4}>
                {profiles.map((profile, index) => (
                  // @ts-ignore - Ignore TypeScript error for MUI Grid
                  <Grid item xs={12} md={4} key={profile.platform}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 3,
                          height: '100%',
                          borderRadius: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            transition: 'transform 0.3s ease-in-out',
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: profile.color,
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={profile.icon}
                          alt={`${profile.platform} logo`}
                          sx={{
                            width: 80,
                            height: 80,
                            objectFit: 'contain',
                            mb: 2,
                          }}
                        />
                        <Typography variant="h5" gutterBottom>
                          {profile.platform}
                        </Typography>
                        <Link
                          href={profile.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'text.secondary',
                            textDecoration: 'none',
                            '&:hover': {
                              color: profile.color,
                            },
                          }}
                        >
                          @{profile.username}
                        </Link>
                        <Box sx={{ mt: 2 }}>
                          {profile.stats.map((stat, i) => (
                            <Box key={i} sx={{ my: 1 }}>
                              <Typography variant="body2" color="text.secondary">
                                {stat.label}
                              </Typography>
                              <Typography variant="h6" sx={{ color: profile.color }}>
                                {stat.value}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default CodingProfiles; 