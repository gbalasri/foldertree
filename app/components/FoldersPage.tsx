"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
//Function to render the First level of Folders from the Api 

export default function FoldersPage({name,id}) {
  const navigate = useRouter();
  return (
    <div className="text-white flex ">
      <div>
        <FolderOpenOutlinedIcon />
      </div>
      <Link href={`/next/${id}`}>{name}</Link>
      <br />
    </div>
  );
}
