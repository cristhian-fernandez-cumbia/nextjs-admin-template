'use client';
import React from 'react';
import { IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Notification: React.FC = () => (
  <IconButton
    aria-label="Notifications"
    className="text-gray-600 hover:text-gray-800"
  >
    <NotificationsNoneIcon />
  </IconButton>
);

export default Notification;