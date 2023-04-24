import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false)

  //function to open app drawer
  // const drawerOpener = () => {
  //   setOpenAppDrawer(true);
  // }

  return (
    <>
    <CssBaseline/>
    <Drawer open={open} onClose={()=>setOpen(false)} >
        <List>
          <ListItemButton>
            <ListItemText> Addresses </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText> Street </ListItemText>
          </ListItemButton>
        </List>
    </Drawer>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=> setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Form
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}