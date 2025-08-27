import { HydrateClient } from "~/trpc/server";
import LandingPage from "~/components/public/LandingPage";
import { OneTap } from "~/components/one-tap";

export default async function Home() {
  return (
    <HydrateClient>
      <OneTap />
      <LandingPage />
    </HydrateClient>
  );
}
