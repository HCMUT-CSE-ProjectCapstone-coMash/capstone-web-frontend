"use client";
import axiosClient from "@/api/axiosClient";
import { RootState } from "@/store";
import { setUser } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useAuth(redirectTo: string) {
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    
    useEffect(() => {
        const fetchProfile = async () => {
            if (user) {
                setLoading(false);
                return;
            }

            const token = localStorage.getItem("token");

            if (!token) {
                router.push(redirectTo);
                setLoading(false);
                return;
            }

            try {
                const response = await axiosClient.get("/auth/profile", {
                    headers: { Authorization: `Bearer ${token}` }
                });

                dispatch(setUser({ 
                    Id: response.data.id, 
                    FullName: response.data.fullName,
                    Email: response.data.Email,
                    CreatedAt: response.data.createdAt,
                    Role: response.data.Role
                }))

                if (response.data.role === "shopowner") {
                    router.replace("/chucuahang");
                } else {
                    router.replace("/nhanvien");
                }

            } catch {
                localStorage.removeItem("token");
                router.push(redirectTo);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [redirectTo, router, user]);

    return { loading };
}