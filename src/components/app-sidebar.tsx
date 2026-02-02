import {
    Calendar,
    Home,
    Images,
    Inbox,
    Settings,
   // Profil
} from "lucide-react";

import { 
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader, 
    // SidebarGroupContent,
    // SidebarGroupLabel, 
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
            <SidebarHeader>
                <div className="text-lg font-bold p-4">Application</div>
            </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu> 
                            <SidebarMenuItem>
                                <SidebarMenuButton>Ana Sayfa</SidebarMenuButton>
                            </SidebarMenuItem>    
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                        <item.icon size={16} />

                                        <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))} 
                         </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>                 
        </Sidebar>
    );
};