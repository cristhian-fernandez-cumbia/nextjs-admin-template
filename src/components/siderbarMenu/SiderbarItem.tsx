'use client';
import React from 'react';
import { Module } from '@/interfaces/module';
import useMaterialIcon from '@/hooks/useMaterialIcon';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

interface SidebarItemProps {
  module: Module;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectSubmodule: (submoduleId: number) => void;
  selectedSubmoduleId: number | null;
  isCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  module,
  isExpanded,
  onToggle,
  onSelectSubmodule,
  selectedSubmoduleId,
  isCollapsed,
}) => {
  const ModuleIcon = useMaterialIcon(module.icono);
  const isSelected = module.submodulos.some(
    (submodule) => submodule.idsubmodulo === selectedSubmoduleId
  );

  return (
    <div className="mb-0">
      <div
        className={`flex items-center justify-between px-5 py-2 cursor-pointer ${isSelected ? 'bg-gray-800 text-white' : 'text-gray-300'} hover:text-white`}
        onClick={onToggle}
      >
        <div className="flex items-center">
          {ModuleIcon}
          {!isCollapsed && <span className="ml-2 font-medium">{module.nombre}</span>}
        </div>
        {!isCollapsed && (
          isExpanded ? (
            <KeyboardArrowDownIcon className="text-gray-400" />
          ) : (
            <KeyboardArrowRightIcon className="text-gray-400" />
          )
        )}
      </div>
      {isExpanded && !isCollapsed && (
        <ul className="ml-8 border-gray-700 pl-5 relative">
          {module.submodulos.map((submodule) => (
            <li key={submodule.idsubmodulo} className="flex items-center relative">
              <RadioButtonCheckedIcon
                className={`absolute -left-6 ${selectedSubmoduleId === submodule.idsubmodulo ? 'text-white' : 'text-gray-400'} hover:text-white`}
                style={{ fontSize: '15px' }}
              />
              <Link
                href={submodule.ruta}
                className={`block text-sm font-medium my-[2px] ${selectedSubmoduleId === submodule.idsubmodulo ? 'text-white' : 'text-gray-400'} hover:text-white`}
                onClick={() => onSelectSubmodule(submodule.idsubmodulo)}
              >
                {submodule.nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;