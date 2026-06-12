import "./globals.css";

export const metadata = {
  title: "Axiom Studio — Full-Service Digital Agency",
  description: "We craft digital experiences that drive growth. Web design, branding, app development, SEO and digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
