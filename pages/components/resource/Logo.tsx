import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="">
      <h1 className="text-red-500 text-3xl font-bold tracking-wider">
        Darf-Ich-Essen
      </h1>
    </Link>
  );
}

export default Logo;
