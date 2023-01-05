import React from "react";

type CustomProps = {
	wrapperStyle?: React.CSSProperties;
	wrapperClassName?: string;
	replaceWrapperCls?: boolean;
	replaceClass?: boolean;
	isInvalid?: boolean;
};

type InputProps = CustomProps & React.ComponentProps<"input">;

function Input({
	wrapperClassName = "",
	wrapperStyle = {},
	replaceWrapperCls = false,
	className = "",
	replaceClass = false,
	isInvalid = false,
	style,
	...props
}: InputProps) {
	return (
		<div
			className={
				replaceWrapperCls
					? wrapperClassName
					: `w-full border-[1px] rounded-md ${
							!isInvalid
								? "border-appGray/50 hover:ring-[3px] hover:ring-appGray/50 focus-within:border-appText"
								: "border-appRed/50 hover:ring-[3px] hover:ring-appRed/50 focus-within:border-appRed"
					  }  ${wrapperClassName}`
			}
			style={{ ...wrapperStyle }}
		>
			<input
				className={
					replaceClass
						? className
						: `w-full p-4 rounded-md border-none focus:outline-none ${className}`
				}
				{...props}
				style={{ ...style }}
			/>
		</div>
	);
}

export default Input;
