import React, { useState, useEffect } from 'react';
import { Module } from '@/interfaces/module';
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarItem from './SiderbarItem';
import avatar from '@/assets/images/avatar/avatar.png';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Button from '../button/Button';
import { signOut } from 'next-auth/react';
import { Logout } from '@/assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { selectIsCollapsed, toggleCollapseMenu } from '@/redux/slices/sidebarSlice';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  user: { name: string; avatar: string };
  modules: Module[];
}

const Sidebar: React.FC<SidebarProps> = ({ user, modules }) => {
  const [expandedModuleId, setExpandedModuleId] = useState<number | null>(null);
  const [selectedSubmoduleId, setSelectedSubmoduleId] = useState<number | null>(null);
  const [isDashboardSelected, setIsDashboardSelected] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const isCollapsed = useSelector(selectIsCollapsed);
  const pathname = usePathname();

  useEffect(() => {
    const matchSubmodule = modules.flatMap((module) => module.submodulos).find((submodule) => pathname === submodule.ruta);
    if (matchSubmodule) {
      setSelectedSubmoduleId(matchSubmodule.idsubmodulo);
      setExpandedModuleId(matchSubmodule.idmodulo);
      setIsDashboardSelected(false);
    } else if (pathname === '/') {
      setSelectedSubmoduleId(null);
      setExpandedModuleId(null);
      setIsDashboardSelected(true);
    }
  }, [pathname, modules]);

  const handleCloseClick = async () => {
    signOut();
  };

  const handleModuleToggle = (id: number) => {
    if (isCollapsed) {
      dispatch(toggleCollapseMenu());
    } else {
      setExpandedModuleId((prev) => (prev === id ? null : id));
      setIsDashboardSelected(false);
    }
  };

  const handleSubmoduleSelect = (submoduleId: number) => {
    if (isCollapsed) {
      dispatch(toggleCollapseMenu());
    }
    setSelectedSubmoduleId(submoduleId);
    setIsDashboardSelected(false);
  };

  const handleDashboardSelect = () => {
    if (isCollapsed) {
      dispatch(toggleCollapseMenu());
    } else {
      setSelectedSubmoduleId(null);
      setExpandedModuleId(null);
      setIsDashboardSelected(true);
    }
  };

  const toggleCollapse = () => {
    dispatch(toggleCollapseMenu());
  };

  return (
    <aside
      className={`h-screen lg:h-[calc(100vh-60px)] bg-gray-900 text-white flex flex-col shadow-lg transition-all duration-500 ease-in-out ${
        isCollapsed ? 'w-full lg:w-16 overflow-hidden' : 'w-full lg:w-64'
      }`}
    >
      <div className="flex items-center p-4 border-b border-gray-800 justify-between">
        {!isCollapsed && (
          <div className="flex items-center overflow-hidden">
            <Image src={avatar} alt="User Avatar" width={48} height={48} className="rounded-full object-cover" />
            <div className="ml-3 truncate">
              <p className="text-lg font-semibold">{user.name}</p>
            </div>
          </div>
        )}
        <button onClick={toggleCollapse} className="text-gray-400 hidden lg:block">
          {isCollapsed ? <MenuIcon className="ml-1" /> : <KeyboardDoubleArrowLeftIcon className="-mr-3" />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-in-out">
        <div className="mt-1">
          <Link
            href="/"
            className={`flex items-center ${
              isDashboardSelected ? 'bg-gray-800 text-white px-5 py-2' : 'text-gray-300 px-5 py-3'
            } hover:text-white`}
            onClick={handleDashboardSelect}
          >
            <HomeIcon className="mr-2" />
            {!isCollapsed && <span className="font-medium">Dashboard</span>}
          </Link>
        </div>
        {modules.length > 0 ? (
          modules.map((module) => (
            <SidebarItem
              key={module.idmodulo}
              module={module}
              isExpanded={expandedModuleId === module.idmodulo}
              onToggle={() => handleModuleToggle(module.idmodulo)}
              onSelectSubmodule={handleSubmoduleSelect}
              selectedSubmoduleId={selectedSubmoduleId}
              isCollapsed={isCollapsed}
            />
          ))
        ) : (
          <p className="text-gray-500">No hay módulos disponibles</p>
        )}
      </nav>

      <div className="mt-auto flex-shrink-0">
        <Button
          className="w-full text-gray-300 bg-ui-gray-light dark:bg-gray-600 rounded-none text-[15px] py-2 px-4 font-extrabold whitespace-nowrap mb-2  hover:text-white"
          onClick={handleCloseClick}
        >
          <Logout className="mr-2 text-gray-300" fill={'gray'} />
          {!isCollapsed && <span className="font-medium overflow-hidden">SALIR DE SESIÓN</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;