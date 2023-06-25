import React from "react";

function Logo() {
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <button
      className="text-red-500 text-3xl font-bold tracking-wider"
      onClick={handleLogoClick}
    >
      Darf-Ich-Essen
    </button>
  );
}

export default Logo;
