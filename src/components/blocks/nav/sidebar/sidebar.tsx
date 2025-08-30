"use client";

import { useIsMobile } from "~/hooks/use-mobile";
import { MobileSidebar } from "./mobile";
import { DesktopSidebar } from "./desktop";

export function Sidebar() {
    const isMobile = useIsMobile();
    
    return isMobile ? <MobileSidebar /> : <DesktopSidebar variant="inset" />;
}