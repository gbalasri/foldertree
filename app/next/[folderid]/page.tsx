'use client';
import React from 'react'
import { useParams } from 'next/navigation'
import SubFolder from '@/app/components/SubFolder';

export default function page() {
    const {folderid}=useParams();
    console.log("FolderID",folderid);
  return (
    <div>
        <SubFolder id={folderid}/>
    </div>
  )
}