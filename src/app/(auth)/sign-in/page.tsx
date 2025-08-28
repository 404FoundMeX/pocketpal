"use client";

import SignIn from "~/components/sign-in";
import { client } from "~/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { getCallbackURL } from "~/lib/shared";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  useEffect(() => {
    void client.oneTap({
      fetchOptions: {
        onError: ({ error }: { error: { message: string } }) => {
          toast.error(error.message ?? "An error occurred");
        },
        onSuccess: () => {
          toast.success("Successfully signed in");
          router.push(getCallbackURL(params));
        },
      },
    });
  }, [params, router]);

  return (
    <div className="h-screen w-full">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex h-full w-full flex-col items-center justify-center md:py-10">
        <div className="md:w-[400px]">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
