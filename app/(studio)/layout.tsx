import "@/app/scss/globals.scss";

export const metadata = {
  title: "infivent",
  description: "Generated by Next + Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
