import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) redirect("/");

  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <h2 className="text-lg text-center font-inter">
        You need to login to your account to proceed
      </h2>
      <form
        action={async () => {
          "use server";

          await signIn("keycloak");
        }}
        className="flex flex-col gap-4"
      >
        <Button type="submit" size="lg">
          Login with Keycloak
        </Button>
        <span className="text-muted-foreground text-xs font-body">
          You will be redirected to the login page
        </span>
      </form>
    </div>
  );
}
