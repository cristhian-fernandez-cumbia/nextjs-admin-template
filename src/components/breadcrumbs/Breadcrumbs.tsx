'use client';

import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname
    .split('/')
    .filter((segment) => segment.length > 0);

  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      className="text-gray-600 flex items-center pt-2 lg:pt-3"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          margin: '0',
        },
      }}
      separator={<ArrowRightIcon fontSize="small"  className="text-gray-500"/>}
    >
      <Link
        href="/"
        aria-label="Go to home"
        className="hover:cursor-pointer text-blue-600 flex items-center"
      >
        <HomeIcon fontSize="small" />
      </Link>

      {pathSegments.map((segment, index) => {
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        if (index === pathSegments.length - 1) {
          return (
            <Typography key={index} color="text.primary">
              {label}
            </Typography>
          );
        }

        return (
          <Typography key={index} color="text.secondary">
            {label}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;