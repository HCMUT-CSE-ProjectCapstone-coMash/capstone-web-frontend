import Link from 'next/link';
import React from 'react';

// 1. Định nghĩa Interface giống như bạn yêu cầu
interface ButtonProps {
    children: React.ReactNode; // Cho phép truyền chữ hoặc Icon vào trong
    className?: string;        // Để tùy biến thêm style Tailwind từ bên ngoài
    onClick?: () => void;      // Hàm xử lý khi click (không bắt buộc)
    type?: "button" | "submit" | "reset"; // Loại nút (mặc định là button)
    href?: string;             // Nếu có href, nút sẽ biến thành thẻ Link (đặc trưng Next.js)
    disabled?: boolean;
}

export function Button({ 
    children, 
    className = "", 
    onClick, 
    type = "button", 
    href,
    disabled = false
}: ButtonProps) {

    // Style chung cho tất cả các nút (căn giữa, hiệu ứng hover...)
    const baseStyles = `flex py-[8px] px-[12px] gap-[4px] rounded-lg transition-colors duration-200 text-white font-sm font-semibold ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 active:scale-95"
    } ${className}`;

    // TRƯỜNG HỢP 1: Nếu có truyền 'href', biến thành Link của Next.js (Chuyển trang)
    if (href && !disabled) {
        return (
            <Link href={href} className={baseStyles}>
                {children}
            </Link>
        );
    }

    // TRƯỜNG HỢP 2: Nút bấm bình thường (Submit form, logic...)
    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled}
            className={baseStyles}
        >
            {children}
        </button>
    );
}