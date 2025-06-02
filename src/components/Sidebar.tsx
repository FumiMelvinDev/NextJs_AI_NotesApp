import { getUser } from "@/auth/server";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import prisma from "@/db/prisma";
import { Note } from "@prisma/client";
import SidebarGroupContent from "./SidebarGroupContent";

export async function AppSidebar() {
  const user = await getUser();

  let notes: Note[] = [];

  if (user) {
    notes = await prisma.note?.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return (
    <Sidebar>
      <SidebarContent className="custom-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel>
            {user ? (
              "Your Notes"
            ) : (
              <p>
                <span className="text-muted-foreground">Please </span>
                <a href="/login" className="text-primary hover:underline">
                  log in
                </a>
                <span className="text-muted-foreground">
                  {" "}
                  to see your notes.
                </span>
              </p>
            )}
          </SidebarGroupLabel>
          {user && <SidebarGroupContent notes={notes} />}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
