'use client';
import React from 'react'
import SubFolder from '../components/SubFolder'
import { useParams } from 'next/navigation'
export default function page() {
    const id=useParams();
  return (
    <div>Next Page bala
        <SubFolder id={id}/>
    </div>
  )
}
