"use client";
import {
  AuthLoading,
  RedirectToSignIn,
  SignedIn,
} from "@daveyplate/better-auth-ui";
import { Spinner } from "~/app/hero-ui";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RedirectToSignIn />
      <AuthLoading>
        <main className="from-black-900 to-black-100 flex min-h-screen items-center justify-center bg-gradient-to-b text-white">
          <div className="space-y-4 text-center">
            <Spinner color="primary" size="lg" />
          </div>
        </main>
      </AuthLoading>
      <SignedIn>{children}</SignedIn>
    </>
  );
}
