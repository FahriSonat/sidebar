import { AppSidebar } from "./components/app-sidebar";


export function App({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen w-screen bg-background text-foreground">

        <AppSidebar />
                    <main className="p-4">
                        <div className="flex justify-between items-center mb-4">
                        </div>
                        {children}
                    </main>
      </div>           
        
    );
}