import Logo from "~/components/logo";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { SignUpForm } from "~/features/auth/components/sign-up-from";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function SignUp() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Link href="/">
        <Logo className="mx-auto invert" />
      </Link>
      <Card className="w-full max-w-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking create an account, you agree to our{" "}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
