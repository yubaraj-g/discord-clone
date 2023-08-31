import { ModeToggle } from "@/components/mode-toggle";
import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </main>
  );
}
