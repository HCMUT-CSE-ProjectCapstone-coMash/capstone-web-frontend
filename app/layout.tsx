import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header/>
                <div className="flex-1">
                    {children}
                </div>
                <Footer/>
            </body>
        </html>
    );
}
