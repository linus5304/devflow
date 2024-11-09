import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>
      <h1 className="h1-bold font-space-grotesk">
        Welcome to the world of Next.js
      </h1>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button>Logout</Button>
      </form>
    </>
  );
}
