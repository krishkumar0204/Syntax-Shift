const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full text-white">
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
};

export default Layout;
