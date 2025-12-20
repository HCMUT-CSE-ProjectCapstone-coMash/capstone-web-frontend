"use client";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
	const { loading } = useAuth("/auth");

	if (loading) {
		return (
			<div></div>
		)
	}

	return (
		<div className="">

		</div>
	);
}
