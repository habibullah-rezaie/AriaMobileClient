import { ComponentProps } from "react";

type BaseProps = { title: string };
type Props = BaseProps &
	(
		| { replaceClsName: true; className: string }
		| { replaceClsName?: false; className?: string }
	);
type SectionCardProps = Props & Omit<ComponentProps<"section">, keyof Props>;
function SectionCard({
	title,
	children,
	className,
	replaceClsName = false,
}: SectionCardProps) {
	return (
		<section
			className={
				replaceClsName
					? className
					: `flex flex-col p-[1.67rem] pt-[3.75rem] bg-thirdGray space-y-[1.67rem] ${className}`
			}
		>
			<h2 className="heading-3 self-start">{title}</h2>
			<div>{children}</div>
		</section>
	);
}

export default SectionCard;
