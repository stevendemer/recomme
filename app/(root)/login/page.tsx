import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) redirect("/");

  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <h2 className="text-lg text-center font-inter">
        Login with your RDIUP account
      </h2>
      <form
        action={async () => {
          "use server";

          await signIn("keycloak");
        }}
      >
        <Button type="submit" variant="outline" size="lg">
          Login with Keycloak
        </Button>
      </form>
    </div>
  );
}
