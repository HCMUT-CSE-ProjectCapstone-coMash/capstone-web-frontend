"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BellIcon, ArrowDownIcon, UserProfileIcon } from "@/assests/Icons";
export function Header() {
    const pathname = usePathname();
    const navItems = [
        { label: "Nhà chính", href: "/" },
        { label: "Sản phẩm", href: "/product" },
        { label: "Nhân viên", href: "/employeess" },
        { label: "Nhập hàng", href: "/import" },
        { label: "Bán hàng", href: "/sales" },
        { label: "Khuyến mãi", href: "/promotions" },
        { label: "Đổi trả hàng", href: "/returns" },
        { label: "Khách hàng nợ", href: "/debt" },
    ];
    return (
        <div className="bg-gray-white flex-col justify-center items-center px-6.25 font-display">
            <div className="flex px-3.75 h-24 items-center justify-between">
                <div className="font-semibold text-4xl text-pink">co
                    <span className="text-purple">Mash</span>
                </div>
                <div className="flex font-medium text-lg text-tgray5 justify-between items-center">
                    {navItems.map((item) => {
                        const isActive = item.href === pathname;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 ${isActive ? "text-tgray9 font-semibold" : ""}`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}

                </div>
                <div className="flex justify-between items-center">
                    <div className="p-3"><BellIcon width={30} height={30}/></div>
                    <div className="bg-pink text-white flex justify-between items-center rounded-lg">
                        <div className="p-3"><UserProfileIcon width={30} height={30}/></div>
                        <div className="text-base font-semibold">Đoàn Lê Vy</div>
                        <div className="p-3"><ArrowDownIcon width={20} height={20}/></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}