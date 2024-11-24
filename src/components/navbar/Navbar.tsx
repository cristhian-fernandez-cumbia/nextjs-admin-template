'use client';
import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logo_desktop from '@/assets/images/logo/logo_desktop.png';
import logo_avatar from '@/assets/images/avatar/avatar.png';
import Notification from '@/components/notification/Notification';
import Avatar from '@/components/avatar/Avatar';
import MenuUser from '@/components/menu/MenuUser';

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }) => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-8 h-[50px] lg:h-[60px] bg-white border-b border-gray-200">
      <div className="flex items-center">
        <div className="lg:hidden">
          <IconButton onClick={toggleDrawer} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        </div>
        <Image
          src={logo_desktop}
          width={160}
          alt="logo_desktop"
          className="mt-1 ml-1 w-32 lg:w-36"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Notification />
        <Avatar
          name="Juan Pérez"
          role="Administrador"
          avatarSrc={logo_avatar}
        />
        <MenuUser />
      </div>
    </div>
  );
};

export default Navbar;