"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export default function SubFoldersPage({ name, id, foldertype, ext }) {
  const navigate = useRouter();
//To render the contents of the subfolder 
  return (
    <div className="text-white flex place-content-between">
      <Link href={`/next/${id}`}>
        <div className="p-4 flex space-x-2 justify-center">
          <div>{getICons(ext)} </div>
          <div>{getName(ext, name)}</div>
        </div>
      </Link>
      <br />
    </div>
  );
}
//To display the file name with extension and folder name without any extensions
function getName(ext, name) {
  if (ext == null) return name;
  else return `${name}.${ext}`;
}
//To display the different icons from material ui for different file types 
function getICons(ext) {
  console.log(ext);
  if (ext == "html") return <IntegrationInstructionsIcon />;
  else if (ext == "doc") return <DocumentScannerIcon />;
  else if (ext == null) return <FolderOpenOutlinedIcon />;
  else return <ArticleIcon />;
}
