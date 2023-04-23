'use client';
import React from "react";
import Link from "next/link";
import FoldersPage from "./FoldersPage";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
//Navigation bar
export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between  place-content-center flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h3 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">
          <HomeRoundedIcon />
          Folder App
        </Link>
      </h3>
    </nav>
  );
}
