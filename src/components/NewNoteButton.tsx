"use client";

import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { createNoteAction } from "@/actions/notes";

type Props = {
  user: User | null;
};

const NewNoteButton = ({ user }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNewNote = async () => {
    if (!user) {
      router.push("/login");
    } else {
      setLoading(true);

      const uuid = uuidv4();

      await createNoteAction(uuid);
      router.push(`/?noteId=${uuid}`);

      toast.success("New note created successfully!");

      setLoading(false);
    }
  };
  return (
    <Button onClick={handleNewNote} variant={"secondary"} className="w-24">
      {loading ? <Loader2 className="animate-spin" /> : "New Note"}
    </Button>
  );
};

export default NewNoteButton;
