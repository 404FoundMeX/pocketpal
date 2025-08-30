"use client"

import * as React from "react"
import {
  BarChartIcon,
  HomeIcon,
  ListIcon,
  PlusIcon,
  TargetIcon,
} from "lucide-react"
import { cn } from "~/lib/utils"

interface BottomNavItem {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  isActive?: boolean
}

interface MobileBottomNavProps {
  className?: string
}

const navigationItems: BottomNavItem[] = [
  {
    title: "Home",
    url: "/home",
    icon: HomeIcon,
    isActive: true,
  },
  {
    title: "Goals",
    url: "#",
    icon: TargetIcon,
  },
  {
    title: "Add Expense",
    url: "#",
    icon: PlusIcon,
  },
  {
    title: "Credits",
    url: "#",
    icon: BarChartIcon,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChartIcon,
  },
]

export function MobileBottomNav({ className }: MobileBottomNavProps) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border",
        className
      )}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navigationItems.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className={cn(
              "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              item.isActive
                ? "text-primary bg-primary/10"
                : "text-muted-foreground"
            )}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.title}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

// Keep the old function for backward compatibility
export function MobileSidebar() {
  return <MobileBottomNav />
}