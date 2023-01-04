import { FieldInputProps } from "formik";
import { useTranslation } from "react-i18next";
import Input from "./Input";

function PasswordFied({
	error,
	isTouched,
	props,
}: {
	error?: string;
	isTouched: boolean;
	props: FieldInputProps<any>;
}) {
	const { t } = useTranslation();

	let placeholder = t("password");
	placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

	return (
		<div className="">
			<label htmlFor="password" className="sr-only">
				{placeholder}
			</label>
			<Input
				id="password"
				placeholder={placeholder}
				type={"password"}
				aria-required={true}
				wrapperStyle={{
					borderColor: isTouched && error ? "rgb(255,0,0,0.6)" : undefined,
				}}
				{...props}
			/>
			{isTouched && error ? (
				<label
					htmlFor="email"
					className="flex flex-row justify-start text-red-600 text-sm mt-0.5"
				>
					{error}
				</label>
			) : null}
		</div>
	);
}

export default PasswordFied;
