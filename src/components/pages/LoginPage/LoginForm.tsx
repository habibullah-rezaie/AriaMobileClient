import { User } from "api/types/user";
import EmailField from "components/lib/inputs/EmailInput";
import PasswordFied from "components/lib/inputs/PasswordInput";
import TailSpinner from "components/lib/loaders/TailSpinner";
import { useFormik } from "formik";
import { FormEvent } from "react";
import { HiExclamation } from "react-icons/hi";
import {
	Link,
	useActionData,
	useNavigation,
	useSubmit,
} from "react-router-dom";
import Logo from "routes/login/Logo";
import { object as yupObj, string as yupStr } from "yup";

function LoginForm() {
	const data: { user: User; error: { message: string } } =
		useActionData() as any;

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
				action: "/login",
				method: "post",
			});
		}
	}

	return (
		<form
			className="font-roboto text-[#16161A] text-sm"
			id="login-form"
			onSubmit={onSubmit}
		>
			<div className="flex flex-row justify-center items-center space-x-2.5">
				<Logo className="h-7" />
				<h1 className="leading-9 text-[2rem]">
					<strong>Aria</strong> Mobile
				</h1>
			</div>

			<div className="flex items-start mt-8">
				<h2 className="font-bold text-2xl">Welcome</h2>
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
							<div className="flex flex-row items-center space-x-2 text-red-700 font-semibold">
								<HiExclamation />
								<h6>Error</h6>
							</div>
							<p className="w-full mt-2 text-start text-sm text-red-700">
								{data.error?.message}
							</p>
						</section>
					</div>
				)}

				<div>
					<button
						className={`w-full flex flex-row items-center justify-center bg-[#16161A] disabled:cursor-not-allowed disabled:bg-opacity-80 active:bg-opacity-90 focus:bg-opacity-90 transition-opacity duration-300 text-center text-lg text-white py-4 rounded-md`}
						type="submit"
						disabled={isSubmitting || !isValid}
					>
						<div className="text-lg w-fit flex flex-row items-center space-x-4">
							<span>{state !== "submitting" ? "Sign In" : "Signing In"}</span>
							{state === "submitting" && (
								<TailSpinner
									className="leading-7"
									width="1.25rem"
									height={"1.25rem"}
								/>
							)}
						</div>
					</button>

					<div className="flex justify-start mt-1">
						<label htmlFor="password-input" className="text-[#666F75] text-sm">
							<Link to="/forgot-password">Forgot Password?</Link>
						</label>
					</div>
				</div>
			</div>
		</form>
	);
}

function useLoginFormik() {
	const formik = useFormik({
		initialValues: { email: "", password: "" },
		initialErrors: {
			email: "Email is required!",
			password: "Password is required!",
		},
		onSubmit: (_, { setSubmitting }) => {
			setSubmitting(false);
		},
		validationSchema: yupObj({
			email: yupStr()
				.email("Enter valid email!")
				.required("Email is required!"),
			password: yupStr().required("Password is Required"),
		}),
	});

	return formik;
}

export default LoginForm;