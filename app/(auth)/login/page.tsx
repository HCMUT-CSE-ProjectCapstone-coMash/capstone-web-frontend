"use client";

import Popup from "@/components/Popup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { PopupType } from "@/components/Popup";


type Errors = {
  username?: string;
  password?: string;
};

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<Errors>({});
	const router = useRouter();
	const [popupOpen, setPopupOpen] = useState(false);
	const [popupType, setPopupType] = useState<PopupType>("loading");
	const [popupMessage, setPopupMessage] = useState("");

	const handleSubmit = () => {
		const newErrors: Errors = {};

		if (!username.trim()) {
		newErrors.username = "Vui lòng nhập tên đăng nhập!";
		}

		if (!password.trim()) {
		newErrors.password = "Vui lòng điền mật khẩu!";
		}

		if (Object.keys(newErrors).length > 0) {
		setErrors(newErrors);
		return;
		}

		if (username !== "admin") {
		setErrors({ username: "Sai tên đăng nhập!" });
		return;
		}

		if (password !== "123abc") {
		setErrors({ password: " Sai mật khẩu!" });
		return;
		}

		setErrors({});
		setPopupType("loading");
		setPopupMessage("Hệ thống đang xử lý.\nXin chờ trong giây lát!");
		setPopupOpen(true);

		// simulate API call
		setTimeout(() => {
			localStorage.setItem("isLoggedIn", "true");
			router.push("/");
		}, 5000);

	};
	
  return (
    <div className="flex flex-col font-display">
		<header className="h-24 flex items-center justify-center bg-gray-white">
			<div className="font-semibold text-3xl text-pink">
				co<span className="text-purple">Mash</span>
			</div>
		</header>

		<main className="flex flex-1 items-center justify-center mt-[155px] mb-[207px] px-[200px]">
			<div className="grid grid-cols-[3fr_2fr] gap-10 w-full max-w-7xl items-center">

				<img
					src="/assets/img/loginImg.png"
					alt="Illustration"
					width={526}
					height={432}
					className="justify-self-center"
				/>

				<div className="w-[470px] h-[330px] flex flex-col">
					
					<h2 className="text-purple font-semibold text-xl text-center mb-4">ĐĂNG NHẬP</h2>

					<label 
						className={`text-sm mb-3 ${errors.username ? "text-dark-red" : "text-black"}`}>Tên đăng nhập
					</label>

					<input
						type="text"
						value={username}
              			onChange={(e) => {
							setUsername(e.target.value);
							setErrors((prev) => ({ ...prev, username: undefined }));} }
						placeholder="Điền tên đăng nhập"
						className={`
							w-full px-3 py-2 rounded-[8px] border
							placeholder:text-sm
							${errors.username 
								? "border-dark-red placeholder:text-dark-red" 
								: "border-tgray5"}
						`}
					/>
					{errors.username && (
						<p className="text-dark-red text-sm font-medium mt-3">
							{errors.username}
						</p>
					)}

					<label 
						className={`text-sm mb-3 mt-4 ${errors.password ? "text-dark-red" : "text-black"}`}>Mật khẩu
					</label>
					<input
						type="password"
						value={password}
              			onChange={(e) => {
							setPassword(e.target.value);
							setErrors((prev) => ({ ...prev, password: undefined }));} }
						placeholder="Điền mật khẩu"
						className={`
							w-full px-3 py-2 rounded-[8px] border
							placeholder:text-sm
							${errors.password 
								? "border-dark-red placeholder:text-dark-red" 
								: "border-tgray5"}
						`}
					/>
					{errors.password && (
						<p className="text-dark-red text-sm font-medium mt-3">
							{errors.password}
						</p>
					)}

					<button onClick={handleSubmit} className="bg-pink mx-auto mt-4 w-auto h-[40px] text-white text-sm px-2.5 py-1.5 rounded-[8px] font-semibold hover:bg-purple transition-colors">
						Đăng nhập
					</button>
				</div>
			</div>
		</main>
		<Popup
			open={popupOpen}
			type={popupType}
			message={popupMessage}
			onClose={() => setPopupOpen(false)}
			/>

    </div>
  );
}
