import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline, SwipeableDrawer, List, ListItemButton, ListItemText } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';


const ClippedDrawer = () => {
  return (
    <div >
<CssBaseline/>

    <SwipeableDrawer  variant='permanent' >
        <Toolbar/> 
        <List>
          <ListItemButton>
            <ListItemText> Addresses </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText> Street </ListItemText>
          </ListItemButton>
        </List>
    </SwipeableDrawer>
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar/>
      <AppBar position="fixed" style={{zIndex: 1201 }}>
        <Toolbar>   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Form
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default ClippedDrawer