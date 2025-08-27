"use client";

import { SignUp } from "~/components/sign-up";
import { client } from "~/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { getCallbackURL } from "~/lib/shared";

export default function Page() {
	const router = useRouter();
	const params = useSearchParams();


	return (
		<div className="w-full h-screen">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className="flex items-center flex-col justify-center w-full md:py-10 h-full">
				<div className="md:w-[400px]">
					<SignUp />
				</div>
			</div>
		</div>
	);
}
