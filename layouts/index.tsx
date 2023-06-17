import React from "react";
import Footer from "@/pages/components/layout/Footer";
import Header from "@/pages/components/layout/Header";

function Layout({ children }: any) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
