import { FieldInputProps } from "formik";
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
	return (
		<div className="">
			<label htmlFor="email-input" className="sr-only">
				Email
			</label>
			<Input
				id="email"
				placeholder="Email"
				aria-required={"true"}
				aria-invalid={error ? "true" : "false"}
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

export default EmailField;
