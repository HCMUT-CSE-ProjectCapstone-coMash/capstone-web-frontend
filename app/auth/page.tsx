"use client";
import Image from "next/image"
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className="grid grid-cols-[3fr_2fr] gap-10 items-center">
            <Image width={526} height={432} src={"/image/loginImg.png"} alt="Illustration"/>

            <div>
                <h2 className="text-purple font-semibold text-xl text-center mb-4">ĐĂNG NHẬP</h2>

                
            </div>
        </div>
    )
}