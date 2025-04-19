import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Box id="contact" component="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 6 }}>
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your visions.
          </Typography>

          <Grid container spacing={4}>
            {/* <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid> */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 0 } }}>
                <Typography variant="h5" gutterBottom>
                  Connect with me
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                  <IconButton
                    color="primary"
                    href="https://linkedin.com/in/nufail-vhora"
                    target="_blank"
                    size="large"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="https://github.com/nv-0203"
                    target="_blank"
                    size="large"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    href="mailto:nufailvhora03@gmail.com"
                    size="large"
                  >
                    <EmailIcon fontSize="large" />
                  </IconButton>
                </Box>
                <Typography variant="body1" sx={{ mt: 4 }}>
                  Feel free to reach out through any of these channels or use the contact form.
                  I'll get back to you as soon as possible!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 