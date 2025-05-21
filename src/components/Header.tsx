import { shadow } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const user = 1;
  return (
    <header
      className="relative flex h-20 w-full items-center justify-between bg-popover px-4 sm:px-6"
      style={{ boxShadow: shadow }}
    >
      <div className="flex w-full items-center justify-between px-4 py-2">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <div className="flex items-center gap-4">
            {user ? (
              <LogoutButton />
            ) : (
              <>
                <Button asChild>
                  <Link href="/login">Sign Up</Link>
                </Button>
                <Button asChild variant={"outline"}>
                  <Link href="/login">Sign In</Link>
                </Button>
              </>
            )}
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
