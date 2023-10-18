import Image from "next/image";
import { Inter } from "next/font/google";
import LoginPage from "@/components/LoginPage";
import OtpPage from "@/components/OtpPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>
      <LoginPage/>
      </h1>
    </main>
  );
}
