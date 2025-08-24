import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import {Providers} from "./providers";

// Utility function to combine class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const metadata: Metadata = {
  title: "PocketPal",
  description: "PocketPal Documentation",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html 
    lang="en"
    dir="ltr"
      className={'dark'}
      suppressHydrationWarning
    >
      <body
      >
        <Providers>
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
