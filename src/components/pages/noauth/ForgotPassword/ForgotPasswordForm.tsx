import EmailField from "components/lib/inputs/EmailInput";
import LogoHorizontal from "components/shared/LogoHorizontal";
import { useForgetPasswdFormik } from "hooks/forms/unauthenticated";
import { FormEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigation, useSubmit } from "react-router-dom";
import AuthFormSubmitBtn from "../AuthFormSubmitBtn";

function ForgotPasswordForm() {
	const { state } = useNavigation();
	const { i18n, t } = useTranslation();
	const {
		handleSubmit,
		isSubmitting,
		errors,
		touched,
		getFieldProps,
		isValid,
	} = useForgetPasswdFormik();

	const submit = useSubmit();

	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		handleSubmit(e);

		submit(e.currentTarget, {
			action: `/${i18n.resolvedLanguage}/forgot-password`,
			method: "post",
		});
	};

	return (
		<div>
			<form
				className={`${
					i18n.resolvedLanguage === "fa" ? "font-iranSansX" : "font-roboto"
				} text-[#16161A] text-sm`}
				id="login-form"
				onSubmit={onSubmit}
			>
				<LogoHorizontal />

				<div className="flex items-start mt-8">
					<h2 className="font-bold text-2xl">
						{t("forgot-passwd--forgotPassword")}
					</h2>
				</div>

				<div className="space-y-6 mt-8">
					<EmailField
						showLabel
						label={t("forgot-passwd--emailLabel").toString()}
						error={errors.email}
						isTouched={!!touched.email}
						props={getFieldProps("email")}
					/>

					{/* {data?.error && (
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
					)} */}

					<div>
						<AuthFormSubmitBtn
							disabled={isSubmitting || !isValid}
							isLoading={state === "submitting"}
							text={t("forgot-passwd--btnText")}
							loadingText={t("forgot-passwd--btnLoadingText")}
						/>

						<div className="flex justify-start mt-2">
							<label
								htmlFor="password-input"
								className="text-[#666F75] text-sm"
							>
								<Link to={`/${i18n.resolvedLanguage}/forgot-password`}>
									{t("forgot-passwd--toLogin")}
								</Link>
							</label>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ForgotPasswordForm;
