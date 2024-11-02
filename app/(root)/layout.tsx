import React, { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
