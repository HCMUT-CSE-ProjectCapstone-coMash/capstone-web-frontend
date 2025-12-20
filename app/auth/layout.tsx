import { Footer } from "@/components/Footer"

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col min-h-screen">
            <header className="h-24 flex items-center justify-center bg-gray-white">
                <p className="font-display font-semibold text-3xl text-pink">
                    co<span className="text-purple">Mash</span>
                </p>
            </header>
            {children}
            <Footer/>
        </div>
    )
}