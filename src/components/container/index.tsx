export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">
      {children}
    </div>
  );
}
