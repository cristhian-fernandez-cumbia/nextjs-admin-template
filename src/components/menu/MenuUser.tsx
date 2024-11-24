'use client';
import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MenuUser: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleMenuOpen}
        aria-controls="user-menu"
        aria-haspopup="true"
        className="text-gray-600 hover:text-gray-800"
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className='mt-1 lg:mt-2 -ml-4 lg:-ml-8 rounded-md'
      >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Configuración</MenuItem>
        <MenuItem onClick={handleMenuClose}>Cerrar sesión</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuUser;