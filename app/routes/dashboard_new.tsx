import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import VideoIcon from '~/components/assets/video_icon.svg';
import CardIcon from "~/components/elements/card_icon";
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

      <div className="space-y-0">
                <div className="flex-auto mx-auto">
                    <div className="row-auto flex mx-auto" >

                        <div className="col-span-1">
                        <CardIcon
                            iconSrc={VideoIcon}
                            title="Notes"
                            description="This is a basic notes function from template."
                            bgColor="bg-blue-500 text-white"
                            />
                        </div>
                        <div className="col-span-1">
                        <CardIcon
                            iconSrc={VideoIcon}
                            title="Remotion Demo Page"
                            description="This is a simple description."
                            bgColor="bg-red-500 text-white"
                            />
                        </div>
                        <div className="col-span-1">
                        <CardIcon
                            iconSrc={VideoIcon}
                            title="Desert North Demo Page"
                            description="This is a simple description."
                            bgColor="bg-green-500 text-white"
                            />
                        </div>
                      </div>
                      </div>
                      </div>

        {/* You can place your content here */}

      </main>
    </div>
  );
}
