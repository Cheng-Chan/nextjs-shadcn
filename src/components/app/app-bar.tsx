import { Button } from "../ui/button";
import { Atom } from "lucide-react";
import ModeToggle from "../ui/mode-toggle";

export default function AppBar() {
  return (
    <main className="flex flex-row justify-between items-center w-full h-14 px-2 shadow-md">
      <Button variant="ghost" className="hover:bg-inherit">
        <Atom className="mr-4 h-6 w-6" />{" "}
        <p className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
          Next.js & shadcn ui
        </p>
      </Button>
      <ModeToggle />
    </main>
  );
}
