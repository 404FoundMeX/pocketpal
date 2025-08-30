import { Sidebar } from "~/components/blocks/nav/sidebar/sidebar";
import { Header } from "~/components/blocks/nav/header/header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <SidebarInset>
          <Header />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
