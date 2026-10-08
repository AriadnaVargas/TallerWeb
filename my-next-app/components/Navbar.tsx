"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center h-[52px] px-6 gap-8 bg-gray-700">

      <Link href="/" className="text-white font-semibold text-sm">
        Navbar
      </Link>

      <ul className="flex gap-5 list-none">
        <li>
          <Link href="/" className="text-white text-sm">Home</Link>
        </li>
        <li>
          <Link href="/features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</Link>
        </li>
        <li>
          <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link>
        </li>
      </ul>

      <div className="flex items-center gap-2 ml-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400
                     text-sm px-3 py-1.5 rounded-sm focus:outline-none focus:border-gray-400 w-52"
        />
        <button className="bg-gray-600 border border-gray-500 text-white hover:bg-gray-500
                           text-sm px-4 py-1.5 rounded-sm transition-colors">
          Search
        </button>
      </div>

    </nav>
  );
};

export default Navbar;