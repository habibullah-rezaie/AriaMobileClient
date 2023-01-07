function ChartIcon({
	className = "",
	width,
	height,
}: {
	className?: string;
	width?: string;
	height?: string;
}) {
	return (
		<svg
			width={width}
			height={height}
			className={`${className}`}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="2"
				y="2"
				width="20"
				height="20"
				rx="5"
				stroke="#171717"
				strokeWidth="1.5"
			/>
			<path
				d="M8 17L8 14"
				stroke="#171717"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 17L12 7"
				stroke="#171717"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 17L16 10"
				stroke="#171717"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default ChartIcon;
