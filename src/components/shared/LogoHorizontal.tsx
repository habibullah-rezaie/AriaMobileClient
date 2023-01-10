import Logo from "components/Icons/Logo";

function LogoHorizontal() {
	return (
		<div
			className="flex flex-row justify-center items-center space-x-2.5"
			dir="ltr"
		>
			<div className="h-fit mb-0.5">
				<Logo className="h-7" />
			</div>
			<h1 className="leading-[3rem] text-[2rem] font-poppins">
				<strong>Aria</strong> Mobile
			</h1>
		</div>
	);
}

export default LogoHorizontal;
