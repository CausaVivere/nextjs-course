import { Button } from "@chakra-ui/react";
import { useSession } from "../sign-in/_provider";

export default function Feed() {
  const { username, signOut } = useSession();

  return (
    <main className="min-w-screen w-full min-h-screen">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="flex flex-row gap-3 absolute top-3 right-3 items-center">
        <h1 className="text-xl">Signed in as {username}</h1>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </main>
  );
}
