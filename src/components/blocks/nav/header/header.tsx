"use client";

import { useIsMobile } from "~/hooks/use-mobile";
import { MobileHeader } from "./mobile";
import { DesktopHeader } from "./desktop";

export function Header() {
    const isMobile = useIsMobile();
    
    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}