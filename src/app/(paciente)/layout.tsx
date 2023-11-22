import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { MenuSideBarPaciente } from "@/utils/MenuSideBar";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  if (session.typeUser === "PROFISSIONAL") {
    redirect("/dashboard");
  }

  return (
    <div style={{ height: "calc(100% - 48px)" }} className="h-full w-full ">
      <Header />
      <div className="flex h-full w-full bg-[#F8F9FA] pb-5">
        <Sidebar menu={MenuSideBarPaciente} />
        <div className="h-full w-full rounded-lg">{children}</div>
      </div>
    </div>
  );
}
