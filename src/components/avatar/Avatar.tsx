import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface AvatarProps {
  name: string;
  role: string;
  avatarSrc: StaticImageData;
}

const Avatar: React.FC<AvatarProps> = ({ name, role, avatarSrc }) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatarSrc}
      alt="Avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
    <div className="hidden lg:block">
      <p className="font-semibold text-gray-800 text-sm">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
);

export default Avatar;