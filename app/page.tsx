'use client';

import '@/app/resources/css/globals.css'
import {useRouter } from 'next/navigation'
import { Session } from "next-auth";

// session 등 권한인증을 하여 페이지 분기

export default function Home({ 
  children, session
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return <div>s</div>
}
