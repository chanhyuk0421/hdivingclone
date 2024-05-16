"use client"

import Link from "next/link";
import styled from "styled-components";
import MainMenu from "./MainMenu";


export default function Header(){

    return(
        <HeaderContainer>
            <h1>
                <Link href='/'>
                    <img src="#"/>
                </Link>
            </h1>
            <MainMenu/>

        </HeaderContainer>
      
    )
}

const HeaderContainer = styled.header`

    img{

    }
    
`