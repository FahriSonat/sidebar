import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";


export function App({ children }: { children: React.ReactNode }) {
    const getDefaultOpen = (): boolean => { 
        if (typeof window === "undefined") return false;
        return localStorage.getItem("sidebar-open") === "true"}
    return (
        <SidebarProvider
            defaultOpen={getDefaultOpen()}>
                <AppSidebar />
                <main className="p-4">
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
    );
}