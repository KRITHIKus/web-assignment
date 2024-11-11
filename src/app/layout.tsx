// src/app/layout.tsx

import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import "@/app/globals.css";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow container mx-auto p-4">{children}</main>
                    <Sidebar />
                </div>
            </body>
        </html>
    );
}
