"use client";

import * as React from "react";
import {
  Search,
  BarChart3,
  CreditCard,
  User,
  ChevronRight,
} from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";

export function DesktopHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6 group-data-[collapsible=icon]/sidebar-wrapper:ml-[calc(var(--sidebar-width-icon)+2px)]">
        {/* Left side - Sidebar trigger and separator */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />

          {/* Breadcrumbs */}
          <nav className="text-muted-foreground flex items-center text-sm">
            <span className="text-foreground font-medium">Dashboard</span>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>Overview</span>
          </nav>
        </div>

        {/* Center - Search field */}
        <div className="mx-6 max-w-md flex-1">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Search..."
              className="bg-muted/50 focus-visible:ring-primary h-8 border-0 pl-10 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Right side - Action buttons and user */}
        <div className="flex items-center gap-2">
          {/* Analytics button */}
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-muted h-8 w-8 rounded-full p-0"
          >
            <BarChart3 className="h-4 w-4" />
          </Button>

          {/* Bank accounts button */}
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-muted h-8 w-8 rounded-full p-0"
          >
            <CreditCard className="h-4 w-4" />
          </Button>

          {/* User button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-full p-0"
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/avatars/user.jpg" alt="User" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    <User className="h-3 w-3" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
