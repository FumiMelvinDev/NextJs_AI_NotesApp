"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errMessage = null;

    if (!errMessage) {
      toast("Logout successful");

      router.push("/");
    } else {
      toast.error(errMessage);
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
