import HeaderLogo from "@/components/ui/headerLogo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "calc(100% - 48px)" }}>
      <HeaderLogo />
      {children}
    </div>
  );
}
