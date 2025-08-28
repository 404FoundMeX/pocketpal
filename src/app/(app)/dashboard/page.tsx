/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UserCard from "./user-card";
import { OrganizationCard } from "./organization-card";
import AccountSwitcher from "~/components/account-switch";

export default async function DashboardPage() {
  const headersList = await headers();
  
  try {
    const session = await auth.api.getSession({
      headers: headersList,
    });
    const activeSessions = await auth.api.listSessions({
      headers: headersList,
    });
    const deviceSessions = await auth.api.listDeviceSessions({
      headers: headersList,
    });
    const organization = await auth.api.getFullOrganization({
      headers: headersList,
    });
        const subscriptions = await auth.api.listActiveSubscriptions({
      headers: headersList,
    });
    
    return (
    <div className="h-screen w-full">
      <div className="mx-auto flex h-full w-[1200px] flex-col gap-4">
        <AccountSwitcher
          sessions={deviceSessions as any}
        />
        <UserCard
          session={session as any}
          activeSessions={activeSessions as any}
          subscription={subscriptions?.find(
            (sub) => sub.status === "active" || sub.status === "trialing",
          )}
        />
        <OrganizationCard
          session={session as any}
          activeOrganization={organization as any}
        />
      </div>
    </div>
    );
  } catch (e: unknown) {
    console.log(e);
    redirect("/sign-in");
  }
}
