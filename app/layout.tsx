import '@/app/resources/css/globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import { Session } from "next-auth";
import { headers } from 'next/headers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MOMpro',
  description: 'MOMpro',
}

async function getSession(cookie: string): Promise<Session> {
  // const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
  //   headers: {
  //     cookie,
  //   },
  // });

  // const session = await response.json();

  // return Object.keys(session).length > 0 ? session : null;
  let a = null;

  return a;
}

export default async function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  
  const session = await getSession(headers().get('cookie') ?? '');
  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
