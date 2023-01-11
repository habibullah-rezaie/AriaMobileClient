import Button from "components/lib/buttons/Button";
import TailSpinner from "components/lib/loaders/TailSpinner";

export default function AuthFormSubmitBtn({
	disabled = false,
	isLoading = false,
	text,
	loadingText,
}: {
	disabled?: boolean;
	isLoading?: boolean;
	text: string;
	loadingText: string;
}) {
	return (
		<Button type="submit" disabled={disabled} className="w-full">
			<div className="text-lg w-full grid grid-flow-col items-center gap-4">
				<span className={`${isLoading ? "justify-self-end" : ""}`}>
					{isLoading && loadingText ? loadingText : text}
				</span>
				{isLoading && (
					<TailSpinner
						className="leading-7 justify-self-start"
						width="1.25rem"
						height={"1.25rem"}
					/>
				)}
			</div>
		</Button>
	);
}
