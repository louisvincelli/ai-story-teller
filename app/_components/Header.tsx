"use client"
import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@heroui/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/button';
import { UserButton, useUser } from '@clerk/nextjs';

function Header() {

    const {user,isSignedIn} = useUser();

    const MenuList = [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Create Story',
            path:'/create-story'
        },
        {
            name:'Explore Stories',
            path:'/explore'
        },
        {
            name:'Contact Us',
            path:'/contact-us'
        },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen} className='bg-[#f7ae79] p-1 border-b-2 border-[#c45302]'>
        <NavbarContent>
            <NavbarMenuToggle className='sm:hidden' aria-label={isMenuOpen?"Close Menu":"Open Menu"}/>
            <NavbarBrand>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
                <h2 className='font-bold text-2xl text-[#c45302] ml-3'>ReadME AI</h2>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='center' className='hidden sm:flex'>
            {MenuList.map((item,index)=>(
                <NavbarItem className='text-xl text-[#c45302] font-medium hover:underline mx-2'>
                    <Link href={item.path}>
                    {item.name}
                    </Link>
                </NavbarItem>
            ))}
        </NavbarContent>
        <NavbarContent justify='end' className='mr-10'>
            <Link href={'/dashboard'}>
                <Button color="primary" className='bg-[#c45302] rounded-3xl p-1 hover:cursor-pointer'>
                    {isSignedIn?
                    'Dashboard':
                    'Get Started'
                    }
                </Button>
            </Link>
            <UserButton />
        </NavbarContent>
        <NavbarMenu>
            {MenuList.map((item,index)=>(
                <NavbarMenuItem>
                    <Link href={item.path}>
                    {item.name}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </Navbar>
  );
};

export default Header;