import { Inter } from "next/font/google";
import LoginPage from "@/components/LoginPage";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <LoginPage />
    </main>
  );
}
