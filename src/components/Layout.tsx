const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
