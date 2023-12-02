import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { MenuSideBarProfissional } from "@/utils/MenuSideBar";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  if (session.typeUser === "PACIENTE") {
    redirect("/profissionais");
  }

  return (
    <div style={{ height: "calc(100% - 48px)" }} className="h-full w-full ">
      <Header />
      <div className="flex h-full w-full bg-[#f0f0f1] pb-5">
        <Sidebar menu={MenuSideBarProfissional} />
        <div className="h-full w-full rounded-lg">{children}</div>
      </div>
    </div>
  );
}
