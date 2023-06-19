import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [navMenu, setNavMenu] = useState([
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Kategorien", path: "/kategorien" },
    { id: 3, name: "Über Uns", path: "/uberuns" },
    { id: 4, name: "Kontakt", path: "/kontakt" },
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
