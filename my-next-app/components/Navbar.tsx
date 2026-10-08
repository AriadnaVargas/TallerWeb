"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center h-[52px] px-6 gap-8 bg-[#2d2d2d]">
      <Link href="/" className="text-white font-semibold text-base whitespace-nowrap">
        Navbar
      </Link>
      <ul className="flex gap-5 list-none">
        <li>
          <Link href="/" className="text-white text-sm font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link href="/features" className="text-gray-400 hover:text-white text-sm transition-colors">
            Features
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
            About
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-2 ml-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="bg-[#3d3d3d] border border-[#555] text-gray-300 placeholder-gray-500
                     text-sm px-3 py-1.5 rounded focus:outline-none focus:border-teal-400 w-56"
        />
        <button className="border border-teal-400 text-teal-400 hover:bg-teal-400/10
                           text-sm px-4 py-1.5 rounded transition-colors">
          Search
        </button>
      </div>

    </nav>
  );
};

export default Navbar;