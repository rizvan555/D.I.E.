import React from 'react';
import Navbar from '../Navbar';
import Logo from '../Logo';

function Header() {
  return (
    <div className="md:flex items-center justify-between px-10 py-4 bg-[#363636] text-slate-100">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
