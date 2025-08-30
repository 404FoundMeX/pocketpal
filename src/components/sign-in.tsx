"use client";

import {
  Button,
  Card,
  CardBody,
  Input,
  Checkbox,
} from "~/app/hero-ui";
import { useState, useTransition } from "react";
import { Loader2, FingerprintIcon } from "lucide-react";
import { signIn } from "~/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { getCallbackURL } from "~/lib/shared";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, startTransition] = useTransition();
  const [passkeyLoading, setPasskeyLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const signInPassKey = async () => {
    setPasskeyLoading(true);

    try {
      const response = await signIn.passkey();

      if (response?.error) {
        toast.error("Passkey authentication failed");
        setPasskeyLoading(false);
      } else {
        toast.success("Successfully signed in with passkey");
        router.push(getCallbackURL(params));
      }
    } catch {
      toast.error("Passkey authentication failed");
      setPasskeyLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-xl">
      <CardBody className="space-y-6 p-8">
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-black">
            <span className="text-xl font-bold text-white">P</span>
          </div>
          <h2 className="text-2xl font-semibold">Log in to PocketPal</h2>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-medium hover:underline">
              Sign up.
            </Link>
          </p>
        </div>

        {/* Email Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="alan.turing@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-600 placeholder-gray-400 focus:border-white"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-white"
              >
                Password
              </label>
              <Link
                href="/forget-password"
                className="text-sm text-white hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-600 placeholder-gray-400 focus:border-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              isSelected={rememberMe}
              onValueChange={setRememberMe}
            />
            <label htmlFor="remember" className="text-sm text-white">
              Remember me
            </label>
          </div>

          <Button
            type="submit"
            className="w-full border-gray-600 bg-gray-800 text-white hover:bg-gray-700"
            isLoading={loading}
            onClick={async () => {
              startTransition(async () => {
                await signIn.email(
                  { email, password, rememberMe },
                  {
                    onSuccess() {
                      toast.success("Successfully signed in");
                      router.push(getCallbackURL(params));
                    },
                  },
                );
              });
            }}
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              "Log In"
            )}
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center">
          <span className="flex-grow border-t border-gray-600" />
          <span className="px-4 text-sm text-gray-400">or</span>
          <span className="flex-grow border-t border-gray-600" />
        </div>

        {/* Social Sign-in Buttons */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <Button
              variant="bordered"
              className="flex-1 gap-2"
              onClick={async () => {
                await signIn.social({
                  provider: "google",
                  callbackURL: "/home",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.98em"
                height="1em"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Google
            </Button>
            <Button
              variant="bordered"
              className="flex-1 gap-2"
              onClick={async () => {
                await signIn.social({
                  provider: "github",
                  callbackURL: "/home",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
              GitHub
            </Button>
          </div>

          {/* Passkey Button */}
          <Button
            variant="bordered"
            className="w-full gap-2"
            disabled={passkeyLoading}
            onClick={signInPassKey}
          >
            <FingerprintIcon size={16} />
            {passkeyLoading ? "Signing in..." : "Sign in with Passkey"}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-gray-400">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-white hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-white hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
