'use client';
import Navbar from '@/components/navbar/Navbar';
import SiderbarMenu from '@/components/siderbarMenu/SiderbarMenu';
import { selectIsCollapsed } from '@/redux/slices/sidebarSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Drawer } from '@mui/material';

const SidebarLayout = ({ children }: { children: React.ReactElement }) => {
  const isCollapsed = useSelector(selectIsCollapsed);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="flex w-full ">
        <div className="hidden lg:block h-full lg:fixed">
          <SiderbarMenu />
        </div>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          classes={{ paper: 'w-64' }}
          className='lg:hidden'
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: '#1a202c', 
              color: 'white',    
            },
          }}
        >
          <SiderbarMenu />
        </Drawer>
        <div
          className={`w-full ${
            isCollapsed ? 'lg:ml-14' : 'lg:ml-[250px]'
          } transition-all duration-500 ease-in-out`}
        >
          <div className="px-6 bg-white dark:bg-background">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;