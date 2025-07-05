import "./globals.css";

export const metadata = {
  title: "Laptop Showcase",
  description: "See the latest laptops and their prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
