"use client";

import { Alert, Button, Card, CardBody, CardHeader, Input } from "~/app/hero-ui";
import { client } from "~/lib/auth-client";
import { AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await client.requestPasswordReset({
        email,
        redirectTo: "/reset-password",
      });
      setIsSubmitted(true);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="flex h-screen min-h-[calc(100vh-10rem)] flex-col items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Check your email</h2>
            <p className="text-muted-foreground text-sm">
              We've sent a password reset link to your email.
            </p>
          </CardHeader>
          <CardBody>
            <Alert description="If you don't see the email, check your spam folder." variant="faded" />
          </CardBody>
          <div className="px-6 py-4">
            <Button
              variant="bordered"
              className="w-full"
              onClick={() => setIsSubmitted(false)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to reset password
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex h-screen min-h-[calc(100vh-10rem)] flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <Card className="w-[350px]">
        <CardHeader className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Forgot password</h2>
          <p className="text-muted-foreground text-sm">
            Enter your email to reset your password
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button
              className="mt-4 w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send reset link"}
            </Button>
          </form>
        </CardBody>
        <div className="flex justify-center px-6 py-4">
          <Link href="/sign-in">
            <Button variant="link" className="px-0">
              Back to sign in
            </Button>
          </Link>
        </div>
      </Card>
    </main>
  );
}
