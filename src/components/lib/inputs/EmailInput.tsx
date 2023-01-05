import { FieldInputProps } from "formik";
import { useTranslation } from "react-i18next";
import Input from "./Input";

function EmailField({
	error,
	isTouched,
	props,
}: {
	error?: string;
	isTouched: boolean;
	props: FieldInputProps<any>;
}) {
	const { t } = useTranslation();

	let placeholder = t("email");
	placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
	return (
		<div className="">
			<label htmlFor="email-input" className="sr-only">
				{placeholder}
			</label>
			<Input
				id="email"
				placeholder={placeholder}
				aria-required={"true"}
				aria-invalid={error ? "true" : "false"}
				isInvalid={Boolean(isTouched && error)}
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

export default EmailField;
