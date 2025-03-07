import Navbar from "@/app/components/Navbar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="">
      <Navbar />
      {children}
    </main>
  );
}
