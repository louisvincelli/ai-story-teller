"use client"

import { ClerkProvider } from '@clerk/nextjs'
import { HeroUIProvider } from '@heroui/react'
import React from 'react'
import Header from './_components/Header'
import { usePathname } from 'next/navigation'

function Provider({children}:{children: React.ReactNode}) {
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith('/sign-in') || pathname?.startsWith('/sign-up')

  return (
    <ClerkProvider>
    <HeroUIProvider>
        {!isAuthPage && <Header />}
        {children}
    </HeroUIProvider>
    </ClerkProvider>
  )
}

export default Provider