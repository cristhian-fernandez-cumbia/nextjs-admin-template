'use client'
import React, { FC } from 'react';
import * as Icons from '@mui/icons-material';

const useMaterialIcon = (iconName: string): JSX.Element | null => {
  const IconComponent = (Icons as Record<string, FC>)[iconName];

  if (!IconComponent) {
    console.warn(`Icono ${iconName} no encontrado en @mui/icons-material`);
    return null;
  }

  return <IconComponent />;
};

export default useMaterialIcon;