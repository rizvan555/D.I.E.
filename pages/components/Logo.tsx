import React from "react";
import { NextPage } from "next";

const Logo: NextPage = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <button
      className="text-red-500 text-2xl font-bold tracking-wider"
      onClick={handleLogoClick}
    >
      Darf-Ich-Essen
    </button>
  );
};

export default Logo;
