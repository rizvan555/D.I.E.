import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [navMenu, setNavMenu] = useState([
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Categories", path: "/categories" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Contact", path: "/contact" },
  ]);

  return (
    <section className="md:flex gap-24 ">
      <ul className="md:flex gap-16 list-none">
        {navMenu.map((nav) => {
          return (
            <li key={nav.id}>
              <Link href={nav.path} legacyBehavior>
                <a className="md:text-[18px] font-bold active:scale-90 focus:text-slate-400 focus:font-normal transition-all ">
                  {nav.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <UserButton afterSignOutUrl="/" />
    </section>
  );
}

export default Navbar;
