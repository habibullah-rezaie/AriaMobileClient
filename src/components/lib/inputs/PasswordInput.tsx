import { FieldInputProps } from "formik";
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
	return (
		<div className="">
			<label htmlFor="password" className="sr-only">
				Password
			</label>
			<Input
				id="password"
				placeholder="Password"
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
