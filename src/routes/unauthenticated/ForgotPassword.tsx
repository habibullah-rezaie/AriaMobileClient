import ForgotPasswordForm from "components/pages/noauth/ForgotPassword/ForgotPasswordForm";
import React from "react";

function ForgotPassword() {
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<main className="w-[22rem]">
				<ForgotPasswordForm />
			</main>
		</div>
	);
}

export default ForgotPassword;
