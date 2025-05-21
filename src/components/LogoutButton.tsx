"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
  };
  return (
    <Button onClick={handleLogout} disabled={loading} className="w-20">
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
};

export default LogoutButton;
