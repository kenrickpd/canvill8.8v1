import "./globals.css";

export const metadata = {
  title: "Hihihi",
  description: "Canvill8.8v1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
