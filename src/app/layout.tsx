import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import userGet from "@/actions/userGet";
import { UserContextProvider } from "@/context/userContext";

export const metadata: Metadata = {
  title: "Dogs NextJS",
  description: "Rede social para cachorros.",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const { data: user } = await userGet();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
