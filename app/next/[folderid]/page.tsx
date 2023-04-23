'use client';
import React from 'react'
import SubFolder from '@/app/components/SubFolder';
type Props={
    params: {
        folderid: string
    }
}
export default function page({params: {folderid}} : Props) {
    //const router=useRouter();
    //const folderid=router.query.folderid;
    console.log("FolderID",folderid);
  return (
    <div>
       
        <SubFolder 
        //@ts-ignore 
        id={folderid}/>
    </div>
  )
}