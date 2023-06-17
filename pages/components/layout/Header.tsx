import React from "react";
import Navbar from "../resource/Navbar";
import Logo from "../resource/Logo";

function Header() {
  return (
    <div className="md:flex items-center justify-between px-10 py-4 bg-[#363636] text-slate-100">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
