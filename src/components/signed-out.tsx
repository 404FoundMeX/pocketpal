"use client";

import { useSession } from "~/lib/auth-client";

export default function SignedOut({ children }: { children: React.ReactNode }) {
    const session = useSession();
    return (
        <>
        {!session?.data ? <>{children}</> : null}
        </>
    )
}