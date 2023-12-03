import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { MenuSideBarPaciente } from "@/utils/MenuSideBar";
import AuthPaciente from "@/components/paciente/AuthPaciente";

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
    <div style={{ height: "calc(100% - 48px)" }} className="h-full w-full">
      <AuthPaciente />
      <Header />
      <div className="flex h-full w-full bg-slate-100 ">
        <Sidebar menu={MenuSideBarPaciente} />
        <div className="h-full w-full  p-5">
          <div className="h-full w-full rounded-xl  ">{children}</div>
        </div>
      </div>
    </div>
  );
}
