import Image from "next/image";
import Dashboard from "@/app/dashboard/page";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:container px-10 md:mx-auto">
      <Dashboard />
    </div>
  );
}
