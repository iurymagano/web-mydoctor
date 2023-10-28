import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "calc(100% - 48px)" }} className="h-full w-full ">
      <Header />
      <div className="flex h-full w-full bg-[#F8F9FA] pb-5">
        <Sidebar />
        <div className="h-full w-full rounded-lg bg-[white]">{children}</div>
      </div>
    </div>
  );
}
