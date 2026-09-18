import "./globals.css";

export const metadata = {
  title: "WEBWHALE — Learn. Build. Scale.",
  description:
    "WEBWHALE is a multipurpose platform for learning, digital products, web development and business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}