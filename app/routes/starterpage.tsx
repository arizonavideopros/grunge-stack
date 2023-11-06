import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  // You can fetch or do anything you want with this userId if required
  // For now, I'm just sending a simple status to show that the user is authenticated
  return json({ status: "Authenticated" });
};

export default function AuthenticatedPage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Authenticated Page</Link>
        </h1>
        <p>{user.email}</p>
        {/* You can keep or remove the logout functionality based on your needs */}
      </header>

      <main className="flex h-full bg-white p-6">
        {/* You can place your content here */}
        <p>Welcome to the authenticated page!</p>
      </main>
    </div>
  );
}
