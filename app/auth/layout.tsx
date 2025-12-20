import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
                <div className="flex flex-1 items-center justify-center font-display">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}