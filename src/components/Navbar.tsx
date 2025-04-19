import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Coding Profiles', to: 'coding-profiles' },
    { name: 'Resume', to: 'https://drive.google.com/file/d/1zWh2OAwvwXxTe5BKHcjjgHF47ADqLdXv/view' },
    // { name: 'Contact', to: 'contact' },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(18, 18, 18, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nufail Vhora
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {menuItems.map((item) => (
            item.name === 'Resume' ? (
              <a 
                key={item.name} 
                href={item.to} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button color="inherit" sx={{ textTransform: 'none' }}>
                  {item.name}
                </Button>
              </a>
            ) : (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button color="inherit" sx={{ textTransform: 'none' }}>
                  {item.name}
                </Button>
              </ScrollLink>
            )
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 