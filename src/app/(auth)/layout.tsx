import HeaderLogo from "@/components/ui/headerLogo";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div style={{ height: "calc(100% - 48px)" }}>
      <HeaderLogo />
      {children}
    </div>
  );
}
