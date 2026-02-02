"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Sidebar({
  side = "left",
  variant = "sidebar",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
}) {
  return (
    <div
      data-slot="sidebar"
      className={cn(
        "bg-sidebar text-sidebar-foreground flex h-full w-64 flex-col border-r",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("gap-2 p-4 flex flex-col", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn("gap-2 p-4 flex flex-col", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn(
        "gap-0 flex min-h-0 flex-1 flex-col overflow-auto",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      className={cn("p-4 relative flex w-full min-w-0 flex-col", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      className={cn("gap-1 flex w-full min-w-0 flex-col", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

function SidebarMenuButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-menu-button"
      className={cn(
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-colors flex w-full items-center",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
}