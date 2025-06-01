"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { deleteNoteAction } from "@/actions/notes";

type Props = {
  noteId: string;
  deleteNoteLocally: (noteId: string) => void;
};

const DeleteNoteButton = ({ noteId, deleteNoteLocally }: Props) => {
  const noteIdParam = useSearchParams().get("noteId") || "";
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDleteNote = () => {
    startTransition(async () => {
      const { errorMessage } = await deleteNoteAction(noteId);

      if (!errorMessage) {
        toast.success("Note deleted successfully!");
      }

      deleteNoteLocally(noteId);

      if (noteId === noteIdParam) {
        router.replace("/");
      } else {
        toast.error(errorMessage || "Failed to delete note");
      }
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="absolute right-2 top-2 -trnslate-y-1.5 size-8 p-0 opacity-0 group-hover/item:opacity-100 [&_svg]:size-3"
          variant={"ghost"}
        >
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            note.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDleteNote}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 w-24"
          >
            {isPending ? <Loader2 className="animate-spin" /> : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteNoteButton;
