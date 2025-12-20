"use client";
import Image from "next/image"
import { useState } from "react";
import { SimpleInput } from "@/components/FormInput";
import { Button } from "@/components/ButtonComponent";
import { useDispatch } from "react-redux";
import axiosClient from "@/api/axiosClient";
import { setUser } from "@/store/userSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (loading) return;

        try {
            setLoading(true);
            const response = await axiosClient.post("/auth/login", {
                email, password
            });
            
            dispatch(setUser({ 
                Id: response.data.id, 
                FullName: response.data.fullName,
                Email: response.data.Email,
                CreatedAt: response.data.createdAt,
                Role: response.data.Role
            }));

            localStorage.setItem("token", response.data.token);

            if (response.data.role === "shopowner") {
                router.replace("/chucuahang");
            } else {
                router.replace("/nhanvien");
            }
        } catch (error) {
            console.error("There is an error login: ", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="w-7xl flex items-center">
                <div className="flex-4 flex items-center justify-center">
                    <Image width={526} height={432} src={"/image/loginImg.png"} alt="Illustration"/>
                </div>

                <div className="flex-3">
                    <h2 className="text-purple font-semibold text-xl text-center mb-4">ĐĂNG NHẬP</h2>

                    <div className="flex flex-col gap-y-5">
                        <SimpleInput 
                            type={"text"}
                            label={"Tên đăng nhập"} 
                            placeHolder={"Điền tiên đăng nhập"}
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <SimpleInput 
                            type={"password"}
                            label={"Mật khẩu"} 
                            placeHolder={"Điền mật khẩu"}
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center mt-5">
                        <Button onClick={handleLogin} className="bg-pink" disabled={loading}>
                            <p>Đăng nhập</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}