"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Session } from "next-auth";
import {useRouter } from 'next/navigation'

export interface AuthContextProps {
  children: React.ReactNode;
  session: Session
}

function Providers({ children, session }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;