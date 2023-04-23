"use client";
import React from "react";
import { useEffect, useState } from "react";
import SubFoldersPage from "./SubFoldersPage";
//Fetching the Subfolders of the selected Parent folder by passing the id as props

export default function SubFolder({id}) {
  const url = "/api/handle/";
  const [folder, setFolder] = useState([]);
  useEffect(() => {
    fetch(url, { next: { revalidate: 30 } })
      .then((response) => response.json())
      .then((data) => setFolder(data));
  }, []);
  //Filtering only the subfolders for the selected folder id
  const subFolders = folder.filter((folder:any) => folder.parent == id);
  //Sorting to bring all the folders listed first.
  subFolders.sort((a:any, b:any) => {
    let fa = a.type.toLowerCase(),
      fb = b.type.toLowerCase();
    if (fa < fb) {
      return 1;
    }
    if (fa > fb) {
      return -1;
    }
    return 0;
  });
  let content :any;
  //Displaying content only when there is a subfolder available for the selected folder.

  if (subFolders.length > 0) {
    content = (
      <div className="text-white bg-slate-700 left-2">
        <br />
        {subFolders.map((folder:any, index) => (
          <SubFoldersPage
            key={folder.id}
            //@ts-ignore 
            foldername={folder.name}
            id={folder.id}
            foldertype={folder.type}
            ext={folder.ext}
          />
        ))}
      </div>
    );
  } else {
    content = (
      <div className="text-white bg-slate-700 left-2">
        <br />{" "}
        <h3>
          {" "}
          you have either selected the file or the Folder has no contents.
        </h3>
      </div>
    );
  }
  return content;
}
