import { FieldInputProps } from "formik";
import { useTranslation } from "react-i18next";
import Input from "./Input";

function EmailField({
	error,
	isTouched,
	showLabel = false,
	label,
	props,
	isRequired = true,
	placeholder: propPlaceholder,
}: {
	error?: string;
	isTouched: boolean;
	showLabel?: boolean;
	label?: string;
	isRequired?: boolean;
	placeholder?: string;
	props: FieldInputProps<any>;
}) {
	const { t } = useTranslation();

	const defaultLabel = t("email");
	let placeholder = !propPlaceholder ? defaultLabel : propPlaceholder;
	placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

	if (isRequired) {
		placeholder += " (" + t("form-placeholder-required") + ")";
	}
	return (
		<div className="flex flex-col">
			<label
				htmlFor="email-input"
				className={`text-appBase-normal text-appText ${
					document.dir === "rtl" ? "text-right" : "text-left"
				} ${!showLabel ? "sr-only" : "mb-4"}`}
			>
				{!label ? defaultLabel : label}
			</label>
			<Input
				id="email"
				placeholder={placeholder}
				aria-required={isRequired ? "true" : "false"}
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
