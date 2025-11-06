"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

    const [open,setOpen] = useState(false)

    const openNavbar = () =>{
        setOpen(!open)
    }

    const links = [
        {
            title:'Início',
            url:'/',
            target:null,
            icon:'bi-house-fill'
        },
         {
            title:'Carta',
            url:'/carta',
            target:null,
            icon:'bi-envelope-heart-fill '
        },
         {
            title:'Galeria',
            url:'/galeria',
            target:null,
            icon:'bi-image-fill'
        },
         {
            title:'Playlist',
            url:'/', // Coloque aqui o link para a sua playlist no lugar de /
            target:"_blank",
            icon:'bi-spotify '
        }
    ]
    return(
        <nav className="sm:flex items-center sm:justify-center gap-8  align-baseline bg-[rgba(0,0,0,0.2)] backdrop-blur-sm text-white shadow-md z-10   p-2 shadow-lg border-1 border-white/20">

                    <div className="flex justify-between">
                        <Link href={'/'} className="w-auto h-full p-2">
                          <span className="font-bold text-4xl text-purple-500">
    J&amp;R
</span>

                        </Link>

                        <div className="p-2 sm:hidden flex items-center justify-center">
                            <i className={`bi ${open == false ? 'bi-list ' : 'bi-x'} text-2xl duration-300 ease-out`} onClick={() => openNavbar()}></i>
                        </div>
                    </div>
                   <div className={` ${open == false ? 'hidden' : 'block' } sm:flex flex-col sm:flex-row items-baseline justify-baseline text-gray-300 flex gap-4 sm:gap-8 my-2 sm:my-1 transition duration-500 ease-in`}>
               
                        {
                            links.map((data,i) => 
                                data.target != null ? <Link href={`${data?.url}`} target="_blank" rel="noopener noreferrer" key={i} className="flex sm:flex-col items-center p-1  gap-2 text-gray-300" onClick={() => openNavbar()}>
                                    <i className={`bi ${data.icon} text-lg`}></i>
                                    {data.title}
                                </Link> : <Link href={`${data?.url}`} key={i} className="flex sm:flex-col items-center p-1  gap-2 text-gray-300 hover:font-semibold transition ease-in">
                                    <i className={`bi ${data.icon} text-lg`} onClick={() => openNavbar()}></i>
                                    {data.title}
                                </Link>
                            )
                        }
            </div>
           
        </nav>
    )
}