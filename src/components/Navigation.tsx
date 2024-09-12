import * as React from 'react';
import { useMediaQuery, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SearchAppBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(940));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {isSmallScreen ? (
            <>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                  fontFamily: 'Chewy',
                  fontSize: '40px'
                }}
              >
                StarWars Encyklopedia
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/films">
                  Films
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/people">
                  Characters
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/planets">
                  Planets
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/species">
                  Species
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/starships">
                  Starships
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/vehicles">
                  Vehicles
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                  fontFamily: 'Chewy',
                  fontSize: '40px'
                }}
              >
                StarWars Encyklopedia
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <MenuItem onClick={handleMenuClose} component={Link} to="/films">
                  Films
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/people">
                  People
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/planets">
                  Planets
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/species">
                  Species
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/starships">
                  Starships
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/vehicles">
                  Vehicles
                </MenuItem>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

