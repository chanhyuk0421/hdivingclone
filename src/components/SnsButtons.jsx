"use client"

import styled from "styled-components"
import { AiTwotoneMail } from "react-icons/ai";
import { SiKakaotalk } from "react-icons/si";
import { CiShop } from "react-icons/ci";
import { MdCoffee } from "react-icons/md";
import Link from "next/link";



export default function SnsButtons(){

    return(
        <div className="snsBtn">
            <Link href={'#'}><button><MdCoffee /></button></Link>
            <Link href={'#'}><button><AiTwotoneMail /></button></Link>
            <Link href={'#'}><button><SiKakaotalk /></button></Link>
            <Link href={'#'}><button><CiShop /></button></Link>          
        </div>
    )
}

const snsBtn = styled.div`
    
`