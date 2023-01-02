import React from "react";

type CustomProps = {
	wrapperStyle?: React.CSSProperties;
	wrapperClassName?: string;
	replaceWrapperCls?: boolean;
	replaceClass?: boolean;
};

type InputProps = CustomProps & React.ComponentProps<"input">;

function Input({
	wrapperClassName = "",
	wrapperStyle = {},
	replaceWrapperCls = false,
	className = "",
	replaceClass = false,
	style,
	...props
}: InputProps) {
	return (
		<div
			className={
				replaceWrapperCls
					? wrapperClassName
					: `w-full border-[1px] rounded-md border-gray-300 focus-within:border-gray-700 focus-within:ring-2 focus-within:ring-gray-300/50 focus-within:ring-offset-1 ${wrapperClassName}`
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
