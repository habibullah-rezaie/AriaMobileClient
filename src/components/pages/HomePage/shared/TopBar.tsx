import Button, { ButtonProps } from "components/lib/buttons/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const routes: { [k: string]: [string, boolean] | [string] } = {
	"": ["home"],
	"/new-bill": ["new-bill", true],
	"/new-item": ["new-item", true],
	"/finance": ["finance"],
	"/finance/new-withdraw": ["new-withdraw"],
	"/settings": ["settings"],
	"/stats": ["statistics"],
};

function getLinks(pathname: string = "") {
	const normalize = (pathname: string) => {
		if (pathname.endsWith("/")) return pathname.slice(0, pathname.length - 1);
		return pathname;
	};

	pathname = normalize(pathname);

	let route: string[] = [];
	while (route.length === 0 && pathname !== "") {
		if ((routes as any)[pathname]) {
			route.unshift(pathname);
		}

		const index = pathname.lastIndexOf("/");
		if (index !== -1) {
			pathname = pathname.slice(0, index);
		}
	}

	if (
		(pathname === "" && route[0] && routes[route[0]][1]) ||
		route.length === 0
	) {
		route.unshift("");
	}
	return route;
}

function TopBar() {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();

	const links = getLinks(
		location.pathname.split(i18n.resolvedLanguage).slice(1)[0]
	);

	const TopBarBtns = (
		<div className="grid grid-flow-col gap-4 justify-end">
			{!location.pathname.includes("new-item") && (
				<TopBarBtn
					variant="secondary"
					onClick={() => navigate(`/${i18n.resolvedLanguage}/new-item`)}
				>
					{t("topbar-new-item")}
				</TopBarBtn>
			)}

			{!location.pathname.includes("new-withdraw") && (
				<TopBarBtn
					variant="secondary"
					onClick={() =>
						navigate(`/${i18n.resolvedLanguage}/finance/new-withdraw`)
					}
				>
					{t("topbar-new-withdraw")}
				</TopBarBtn>
			)}
			{!location.pathname.includes("new-bill") && (
				<TopBarBtn
					variant="primary"
					onClick={() => navigate(`/${i18n.resolvedLanguage}/new-bill`)}
				>
					{t("topbar-new-bill")}
				</TopBarBtn>
			)}
		</div>
	);

	console.log(links);
	return (
		<div className="h-fit w-full grid grid-cols-[3fr_5fr] grid-rows-1 items-center">
			<nav aria-label="breadcrumbs">
				<ol className="w-fit flex flex-row text-appBase-normal text-appText border-b-[1px] border-b-appText">
					{links.map((link: keyof typeof routes, i) => {
						return (
							<React.Fragment key={link}>
								<li>
									<Link
										to={`/${i18n.resolvedLanguage}${link}`}
										aria-current={
											i === links.length - 1 ? "location" : undefined
										}
									>
										{t(routes[link][0])}
									</Link>
								</li>
								<li
									aria-hidden="true"
									className="mx-1 flex flex-row items-center"
								>
									{document.dir === "ltr" ? (
										<MdKeyboardArrowRight />
									) : (
										<MdKeyboardArrowLeft />
									)}
								</li>
							</React.Fragment>
						);
					})}
				</ol>
			</nav>
			{TopBarBtns}
		</div>
	);
}

const TopBarBtn = ({ children, variant, onClick }: ButtonProps) => {
	return (
		<Button
			variant={variant}
			style={{ padding: 0 }}
			className="lg:w-32 xl:w-36"
			onClick={onClick}
		>
			<span className="my-[0.83rem] mx-auto">{children}</span>
		</Button>
	);
};

export default TopBar;
