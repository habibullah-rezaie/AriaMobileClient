import React from "react";

type CustomButtonProps = {
	replaceClass?: boolean;
	variant?: "primary" | "secondary";
};

export type ButtonProps = CustomButtonProps &
	React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{
		replaceClass = false,
		children,
		className = "",
		variant = "primary",
		...props
	},
	ref
) {
	if (variant === "secondary") {
		return (
			<SecondaryBtn
				replaceClass={replaceClass}
				className={className}
				ref={ref}
				{...props}
			>
				{children}
			</SecondaryBtn>
		);
	}

	return (
		<button
			className={
				replaceClass
					? className
					: `flex flex-row items-center justify-center bg-appBase hover:bg-appBase/80 focus:ring-2 focus:ring-appBase focus:ring-offset-[3px] active:ring-2 active:ring-appBase active:ring-offset-[3px] disabled:cursor-not-allowed disabled:bg-appBase/80 disabled:ring-appBase/80  transition-opacity duration-300 text-center text-white py-4 rounded-md ${className}`
			}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	);
});

export default Button;

export const SecondaryBtn = React.forwardRef<
	HTMLButtonElement,
	Omit<ButtonProps, "variant">
>(function Button({ replaceClass, children, className, ...props }, ref) {
	return (
		<button
			className={
				replaceClass
					? className
					: `flex flex-row items-center justify-center text-appBase .text-appBase-normal  ring-1 ring-appBase  bg-white hover:ring-0 hover:bg-thirdGray focus:ring-2 active:ring-2 disabled:cursor-not-allowed  transition-all duration-300 text-center py-4 px-[3.33rem] rounded-md ${className}`
			}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	);
});
