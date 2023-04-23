"use client";
import { Inter } from "next/font/google";
import FoldersPage from "./components/FoldersPage";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const url = "/api/handle/";
  const [folder, setFolder] = useState([]);

  useEffect(() => {
    fetch(url,{next: {revalidate: 30
   }})
      .then((response) => response.json())
      .then((data) => setFolder(data));
  }, []);
  console.log(folder);
  //@ts-ignore 
  const parentFolders = folder.filter((folder) => folder.parent == null);
  //const sameparents = folder.join

  return (
    <div>
      {
        <div className="folder-list">
          {parentFolders.map((folder, index) => (
            <FoldersPage 
            //@ts-ignore 
            key={folder.id} name={folder.name} id={folder.id} />
          ))}
        </div>
      }
    </div>
  );
}
