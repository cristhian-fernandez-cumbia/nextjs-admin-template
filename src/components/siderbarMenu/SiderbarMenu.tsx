'use client'
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { getSession } from 'next-auth/react';
import { Module } from '@/interfaces/module';
import Siderbar from './Siderbar';

const SiderbarMenu: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [user, setUser] = useState<{ name: string; avatar: string }>(
    { name: '---', avatar: '/avatar.png' }
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSession = async () => {
      const userSession = await getSession();
      if (userSession && userSession.user) {
        setModules(userSession.user.modules || []);
        setUser({
          name: userSession.user.name,
          avatar: userSession.user.avatar,
        });
      }
      setIsLoading(false);
    };
    fetchSession();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Siderbar user={user} modules={modules} />
  );
};

export default SiderbarMenu;