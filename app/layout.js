import { Inter } from "next/font/google";
import "../styles/app.scss";
import Header from "./header";
import { ContextProvider } from "@/components/Clients/Clients";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "This is todo app project made for Next js series .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <>
            {" "}
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
