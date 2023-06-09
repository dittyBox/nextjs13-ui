'use client';

import '@/app/resources/css/globals.css'
import React, { ReactNode } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginPage from '../signin/page'

interface Props {
  children: ReactNode;
}

// session 등 권한인증을 하여 페이지 분기
export default function CheckSession({ children }: Props) {
  const { data: session } = useSession();
  console.log((session));

  if ((session && session.user)) {
  return (
    <div>d{children}d</div>
  );
  } else {
    return (
      <LoginPage/>
    );
  }
}

// export default function CheckSession({
//   children
// }: {
//   children: React.ReactNode;
// }) {
  
//   const { data: session } = useSession();
//   console.log(session?.user);
  
//   if (session && session.user) {
//     return (
//       {children}
//     );
//   } else {
//     signIn();
//   }
// }
