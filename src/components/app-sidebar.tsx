import {
    Calendar,
    Home,
    Images,
    Inbox,
    Settings,
} from "lucide-react";

import { 
    Sidebar, 
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, 
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
 } from "./ui/sidebar"; 


 const items = [

    { title: "Home", 
         url: "/", 
         icon: Home,
    },
    { title: "Gallery",
         url:"gallery", 
         icon: Images, 
    },
    { title: "Inbox", 
         url:"inbox", 
         icon: Inbox,
    },
    { title: "Calendar", 
        url:"calendar", 
        icon: Calendar, 
    },
    { title: "Settings", 
        url:"settings",
        icon: Settings, 
    },

 ]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => ( 
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="flex items-center gap-2 w-full">
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};