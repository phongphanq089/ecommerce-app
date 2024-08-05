'use client'
import { createClient, OAuthStrategy } from '@wix/sdk'
import { products, collections } from '@wix/stores'
import Cookies from 'js-cookie'
import React, { createContext } from 'react'

const refreshToken = JSON.parse(Cookies.get('refreshToken') || '{}')

const wixClient = createClient({
  modules: {
    products,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: '', expiresAt: 0 },
    },
  }),
})

export type wixClient = typeof wixClient

export const wixClientContext = createContext<wixClient>(wixClient)

export const WixClientContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <wixClientContext.Provider value={wixClient}>
      {children}
    </wixClientContext.Provider>
  )
}
