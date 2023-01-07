import HomeIcon from "components/Icons/HomeIcon";
import { NavLink } from "react-router-dom";

function NavItem({
	route,
	Icon,
	title,
}: {
	route: string;
	title: string;
	Icon: typeof HomeIcon;
}) {
	return (
		<div className="w-fit">
			<NavLink to={route} role="menuitem" className={"w-fit"}>
				{({ isActive }) => {
					return (
						<div
							className={`border-appBase border-[2px] w-fit rounded-lg ${
								isActive ? "p-2.5" : "p-0"
							}`}
						>
							<Icon className={`w-6 h-6`} />
						</div>
					);
				}}
			</NavLink>
		</div>
	);
}

export default NavItem;
