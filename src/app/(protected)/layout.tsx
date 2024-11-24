import SidebarLayout from '@/components/layout/SidebarLayout';

const Layout = ({ children }: { children: React.ReactElement }) => {
  return <SidebarLayout>{children}</SidebarLayout>;
};

export default Layout;