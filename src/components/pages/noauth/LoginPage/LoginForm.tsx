import { User } from "api/types/user";
import EmailField from "components/lib/inputs/EmailInput";
import PasswordFied from "components/lib/inputs/PasswordInput";
import LogoHorizontal from "components/shared/LogoHorizontal";
import { useLoginFormik } from "hooks/forms/unauthenticated";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { HiExclamation } from "react-icons/hi";
import {
	Link,
	useActionData,
	useNavigation,
	useSubmit,
} from "react-router-dom";
import AuthFormSubmitBtn from "../AuthFormSubmitBtn";

function LoginForm() {
	const data: { user: User; error: { message: string } } =
		useActionData() as any;

	const { t, i18n } = useTranslation();

	const { state } = useNavigation();
	const submit = useSubmit();
	const {
		handleSubmit,
		isSubmitting,
		errors,
		getFieldProps,
		touched,
		isValid,
	} = useLoginFormik();

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		handleSubmit(e);

		if (!errors.email && !errors.password) {
			submit(e.currentTarget, {
				action: `/${i18n.resolvedLanguage}/login`,
				method: "post",
			});
		}
	}

	return (
		<form
			className={`${
				i18n.resolvedLanguage === "fa" ? "font-iranSansX" : "font-roboto"
			} text-[#16161A] text-sm`}
			id="login-form"
			onSubmit={onSubmit}
		>
			<LogoHorizontal />

			<div className="flex items-start mt-8">
				<h2 className="font-bold text-2xl">{t("login-form-welcome")}</h2>
			</div>

			<div className="space-y-6 mt-8">
				<EmailField
					isTouched={!!touched.email}
					props={getFieldProps("email")}
					error={errors.email}
				/>
				<PasswordFied
					isTouched={!!touched.password}
					props={getFieldProps("password")}
					error={errors.password}
				/>

				{data?.error && (
					<div className="w-full bg-red-700 rounded-md">
						<section className="ml-1 py-2 px-4 rounded-md bg-red-200">
							<div className="flex flex-row items-center space-x-2 text-red-700 font-bold">
								<HiExclamation />
								<h6>{t("error-comp-title")}</h6>
							</div>
							<p className="w-full mt-2 text-start text-sm text-red-700">
								{data.error?.message}
							</p>
						</section>
					</div>
				)}

				<div>
					<AuthFormSubmitBtn
						disabled={isSubmitting || !isValid}
						isLoading={state === "submitting"}
						text={t("login-form-sign-in")}
						loadingText={t("login-form-signing-in")}
					/>

					<div className="flex justify-start mt-2">
						<label htmlFor="password-input" className="text-[#666F75] text-sm">
							<Link to={`/${i18n.resolvedLanguage}/forgot-password`}>
								{t("login-form-forget-password")}
							</Link>
						</label>
					</div>
				</div>
			</div>
		</form>
	);
}

export default LoginForm;
