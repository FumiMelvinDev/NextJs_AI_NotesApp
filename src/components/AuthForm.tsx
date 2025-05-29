"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { startTransition, useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { loginAction, signUpAction } from "@/actions/users";

type Props = {
  type: "login" | "signup";
};

const AuthForm = ({ type }: Props) => {
  const isLoginForm = type === "login";
  const router = useRouter();

  const [isPending, startIsTransiction] = useTransition();

  const handleSubmit = (formdata: FormData) => {
    startTransition(async () => {
      const email = formdata.get("email") as string;
      const password = formdata.get("password") as string;

      let errorMessage;
      let toastMessage;

      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
        toastMessage = "Login successful";
      } else {
        errorMessage = (await signUpAction(email, password)).errorMessage;
        toastMessage = "Signup successful";
      }

      if (!errorMessage) {
        toast.success(toastMessage);
        router.replace("/");
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form action={handleSubmit} className="">
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="'email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="enter your email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="'password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="enter your password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Signup"
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/signup" : "/login"}
            className={`text-blue-500 ${
              isPending ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
