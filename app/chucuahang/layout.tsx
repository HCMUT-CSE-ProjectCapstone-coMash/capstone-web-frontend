"use client";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { withBasePath } from "@/ultis/withBasePath";
import { useAuth } from "@/hooks/useAuth";

export default function ShopOwnerLayout({ children }: { children: React.ReactNode }) {
    const { loading } = useAuth("/auth");

    if (loading) {
        return (
            <div></div>
        )
    }

    const navItems = withBasePath("/chucuahang", [
        { label: "Nhà chính", href: "" },
        { label: "Sản phẩm", href: "/product" },
        { label: "Nhân viên", href: "/employees" },
        { label: "Nhập hàng", href: "/nhaphang" },
        { label: "Bán hàng", href: "/sales" },
        { label: "Khuyến mãi", href: "/promotions" },
        { label: "Đổi trả hàng", href: "/returns" },
        { label: "Khách hàng nợ", href: "/debt" },
    ]);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header navItems={navItems}/>
                <div className="flex-1">
                    {children}
                </div>
            <Footer/>
        </div>
    )
}