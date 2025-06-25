import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-[480px]">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
