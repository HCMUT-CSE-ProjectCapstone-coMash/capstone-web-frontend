"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BellIcon, ArrowDownIcon, UserProfileIcon } from "@/public/assests/Icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface NavItem {
    label: string;
    href: string;
}

interface HeaderProps {
    navItems?: NavItem[];
}

export function Header({ navItems = [] } : HeaderProps) {
    const pathname = usePathname();
    const user = useSelector((state: RootState) => state.user.user);
    
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
                    <div className="p-3"><BellIcon width={30} height={30} fill={"none"}/></div>
                    <div className="bg-pink text-white flex justify-between items-center rounded-lg">
                        <div className="p-3"><UserProfileIcon width={30} height={30} fill={"none"}/></div>
                        <div className="text-base font-semibold">{user?.FullName}</div>
                        <div className="p-3"><ArrowDownIcon width={20} height={20} fill={"none"}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}