'use client';

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (session) return <main>Hello {session?.user?.name}</main>;

  return <main>Idk</main>;
}
