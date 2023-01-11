import { useFormik } from "formik";
import { t } from "i18next";
import { object as yupObj, string as yupStr } from "yup";

export function useLoginFormik() {
	const formik = useFormik({
		initialValues: { email: "", password: "" },
		initialErrors: {
			email: t("login-form-email-required"),
			password: t("login-form-password-required"),
		},
		onSubmit: (_, { setSubmitting }) => {
			setSubmitting(false);
		},
		validationSchema: yupObj({
			email: yupStr()
				.email(t("login-form-enter-valid-email").toString())
				.required(t("login-form-email-required").toString()),
			password: yupStr().required(t("login-form-password-required").toString()),
		}),
	});

	return formik;
}

export function useForgetPasswdFormik() {
	const formik = useFormik({
		initialValues: { email: "" },
		initialErrors: {
			email: t("login-form-email-required"),
		},
		onSubmit: (_, { setSubmitting }) => {
			setSubmitting(false);
		},
		validationSchema: yupObj({
			email: yupStr()
				.email(t("login-form-enter-valid-email").toString())
				.required(t("login-form-email-required").toString()),
		}),
	});

	return formik;
}
