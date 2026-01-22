import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <Header />
      <main className="wrapper-main front-wrapper">{children}</main>
      <Footer />
    </Suspense>
  );
}
