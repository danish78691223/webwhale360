import "./globals.css";

export const metadata = {
  title: "Startup — Learn. Build. Scale.",
  description: "A multipurpose platform for learning, products and startup services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
