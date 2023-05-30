import "../globals.css";

export const metadata = {
  title: "Sanity Studio - Gustavo Bucker",
  description: "Sanity Studio - Portfólio de Gustavo Bucker",
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
