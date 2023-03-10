import React from "react";
import SquareLoader from "../loaders/SquareLoader";
import Img, { ImgProps } from "./Img";

interface IPreLoadableImgProps {
	aspectWidth: number;
	aspectHeight: number;
	Loader?: React.ReactNode;
	fit?: "contain" | "fill" | "scale-down" | "none" | "cover";
	noSuspense?: boolean;
}

export type PreLoadableImgProps = Omit<ImgProps, keyof IPreLoadableImgProps> &
	IPreLoadableImgProps;

function ImgWithLoader({
	src,
	alt,
	title,
	width,
	height,
	aspectWidth,
	aspectHeight,
	fit = "contain",
	className = "",
	Loader = <SquareLoader className="" />,
	noSuspense = false,
	...props
}: PreLoadableImgProps) {
	return (
		<div
			className={`flex items-center justify-center aspect-w-${aspectWidth} aspect-h-${aspectHeight}  ${className}`}
			style={{ width, height }}
		>
			{!noSuspense ? (
				<React.Suspense fallback={Loader}>
					<Img
						src={src}
						alt={alt}
						title={title}
						className={`object-${fit}`}
						{...props}
					/>

					<noscript>
						<img src={src} alt={alt} className={``} />
					</noscript>
				</React.Suspense>
			) : (
				<Img
					src={src}
					alt={alt}
					title={title}
					className={`object-${fit}`}
					{...props}
				/>
			)}
		</div>
	);
}
export default ImgWithLoader;
