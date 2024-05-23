import Navbar from "@/Components/Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
