export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient">
      <div className="relative z-10 w-full max-w-md p-6 md:p-10">{children}</div>
    </div>
  );
}
