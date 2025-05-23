"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      toast.success("Logout successful");

      router.push("/");
    } else {
      toast.error(errorMessage);
    }
    setLoading(false);
  };
  return (
    <Button onClick={handleLogout} disabled={loading} className="w-20">
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
};

export default LogoutButton;
