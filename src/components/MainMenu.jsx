import { MenuContext } from "@/utils/MenuContext";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";


export default function MainMenu(){
    const {menuList} = useContext(MenuContext);
    
    return(
        <Nav>
            <ul>
                {menuList.map((el,index)=>(
                    <li key={index}>
                        <Link href={`/${el}`}>{el}</Link>
                    </li>
                ))}
            </ul>
        </Nav>
    )
}
const Nav = styled.nav`
    
`