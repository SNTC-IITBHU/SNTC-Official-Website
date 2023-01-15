import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;