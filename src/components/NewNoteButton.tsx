"use client";

import { User } from "@supabase/supabase-js";

type Props = {
  user: User | null;
};

const NewNoteButton = ({ user }: Props) => {
  console.log(user?.email);

  return <div className="">New Note ....</div>;
};

export default NewNoteButton;
