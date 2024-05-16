"use client"
import { createContext } from "react";


export const MenuContext = createContext({
    menuList : ['HOME','HELLO','Blog','Edu', 'Tour']
})